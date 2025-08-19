import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Avatar,
  IconButton,
} from "@mui/material";
import { Star, StarBorder, ThumbUp, ThumbDown } from "@mui/icons-material";

interface Review {
  id: number;
  user_id: number | null;
  product_id: number;
  stars: number;
  comments: string;
  likes: number;
  dislikes: number;
  date: string;
  username?: string;
}

interface CustomerReviewsProps {
  id: number | undefined;
}

const CustomerReviews = ({ id }: CustomerReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchReviews = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        const response = await fetch(
          `http://127.0.0.1:8000/api/reviews/?product_id=${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        setReviews(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const totalReviews = reviews.length;
  const distribution = [5, 4, 3, 2, 1].map((stars) => {
    const count = reviews.filter((r) => r.stars === stars).length;
    return {
      stars,
      percentage: totalReviews ? Math.round((count / totalReviews) * 100) : 0,
    };
  });

  const avgRating =
    totalReviews > 0
      ? (reviews.reduce((acc, r) => acc + r.stars, 0) / totalReviews).toFixed(1)
      : "0.0";

  return (
    <div className="flex items-center justify-start w-full ml-72 ">
      <Box sx={{ padding: 3, maxWidth: 800 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Customer Reviews
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              mr: 5,
              flexShrink: 0,
            }}
          >
            <Typography variant="h3" component="span" sx={{ mr: 2 }}>
              {avgRating}
            </Typography>
            <Box>
              <Box>
                {[...Array(5)].map((_, index) =>
                  index < Math.round(Number(avgRating)) ? (
                    <Star key={index} sx={{ color: "black" }} />
                  ) : (
                    <StarBorder key={index} sx={{ color: "black" }} />
                  )
                )}
              </Box>
              <Typography variant="body2" color="text.secondary">
                {totalReviews} reviews
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, minWidth: "250px" }}>
            {distribution.map((item) => (
              <Box
                key={item.stars}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography variant="body2" sx={{ width: "10%" }}>
                  {item.stars}
                </Typography>
                <Box sx={{ width: "80%", mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={item.percentage}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      backgroundColor: "#DEE5DB",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "black",
                      },
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ width: "10%", textAlign: "right" }}
                >
                  {item.percentage}%
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {reviews.map((review) => (
          <Box key={review.id} sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Avatar sx={{ mr: 2 }}>{review.username?.[0] ?? "U"}</Avatar>
              <Box>
                <Typography variant="subtitle1">
                  {review.username ?? `User ${review.user_id}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {new Date(review.date).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              {[...Array(5)].map((_, i) =>
                i < review.stars ? (
                  <Star key={i} sx={{ color: "black" }} />
                ) : (
                  <StarBorder key={i} sx={{ color: "#DEE5DB" }} />
                )
              )}
            </Box>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {review.comments}
            </Typography>
            <Box>
              <IconButton size="small">
                <ThumbUp />
              </IconButton>
              <Typography variant="body2" component="span" sx={{ mr: 2 }}>
                {review.likes}
              </Typography>
              <IconButton size="small">
                <ThumbDown />
              </IconButton>
              <Typography variant="body2" component="span">
                {review.dislikes}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default CustomerReviews;
