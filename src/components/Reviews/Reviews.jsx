import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import ReviewForm from "../ReviewForm";
import "./Reviews.css";

export default function Reviews() {

const [reviews, setReviews] = useState([]);
const [topReviews, setTopReviews] = useState([]);
const [latestReviews, setLatestReviews] = useState([]);

const fetchReviews = async () => {

  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch error:", error);
    return;
  }

  console.log("Fetched reviews:", data); // debug
  setReviews(data || []);
};
const fetchTopReviews = async () => {

const { data, error } = await supabase
.from("reviews")
.select("*")
.order("rating", { ascending: false })
.limit(5);

if(error){
console.error(error);
return;
}

setTopReviews(data);

};
const fetchLatestReviews = async () => {

const { data, error } = await supabase
.from("reviews")
.select("*")
.order("created_at", { ascending: false })
.limit(4);

if(error){
console.error(error);
return;
}

setLatestReviews(data);

};
useEffect(() => {
fetchTopReviews();
fetchLatestReviews();
}, []);
useEffect(() => {
  fetchReviews();
}, []);

return (
<section className="reviews">

<h2>Traveler Reviews</h2>

<ReviewForm refreshReviews={fetchReviews} />

<h3 className="reviews-title">Top Rated Reviews</h3>

<div className="reviews-container">

{topReviews.map((item)=>(
<div className="review-card" key={item.id}>

<div className="stars">
{"⭐".repeat(item.rating)}
</div>

<p>"{item.review}"</p>

<h4>{item.name}</h4>

</div>
))}

</div>
<h3 className="reviews-title">Latest Reviews</h3>

<div className="reviews-container">

{latestReviews.map((item)=>(
<div className="review-card" key={item.id}>

<div className="stars">
{"⭐".repeat(item.rating)}
</div>

<p>"{item.review}"</p>

<h4>{item.name}</h4>

</div>
))}

</div>

{reviews.length === 0 ? (

<p className="no-reviews">
No reviews yet. Be the first traveler to share your experience.
</p>

) : (

<p className="total-reviews">
Total Reviews: {reviews.length}
</p>
)}

</section>
);
}