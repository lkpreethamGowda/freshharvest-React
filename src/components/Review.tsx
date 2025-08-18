import {
  Box,
  Typography,
  LinearProgress,
  Avatar,
  IconButton,
} from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Olivia Chen",
      date: "July 15, 2024",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 2,
      comment:
        "These carrots are incredibly fresh and flavorful! I can taste the difference compared to store-bought ones. Highly recommend!",
      likes: 10,
      dislikes: 2,
    },
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <Box sx={{ padding: 3, maxWidth: 800 }}>
        <Typography variant="h4" component="h1" gutterBottom>
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
            <Typography variant="h2" component="span" sx={{ mr: 2 }}>
              4.8
            </Typography>
            <Box>
              <Box>
                {[...Array(5)].map((_, index) =>
                  index < 4 ? (
                    <Star key={index} sx={{ color: "black" }} />
                  ) : (
                    <StarBorder key={index} sx={{ color: "black" }} />
                  )
                )}
              </Box>
              <Typography variant="body2" color="text.secondary">
                150 reviews
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, minWidth: "250px" }}>
            {ratingDistribution.map((item) => (
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

        {reviews.map((review, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Avatar src={review.avatar} alt={review.name} sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1">{review.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.date}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              {[...Array(5)].map((_, i) =>
                i < review.rating ? (
                  <Star key={i} sx={{ color: "black" }} />
                ) : (
                  <StarBorder key={i} sx={{ color: "#DEE5DB" }} />
                )
              )}
            </Box>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {review.comment}
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
