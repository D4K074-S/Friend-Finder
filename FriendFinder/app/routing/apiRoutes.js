const express = require("express");
const router = express.Router();

function getFriends() {
  return [];
}

function generateRecommendedFriend() {
  return {};
}

router.get("/get_friends", function(req, res) {
  const result = getFriends();
  res.json(result);
});

router.post("/generate_recommended", function(req, res) {
  const result = generateRecommendedFriend(request.body.preferences);
  res.json(result);
});

module.exports = router;
