import { useState } from "react";
import "./ReviewForm.css";
import { supabase } from "../lib/supabase";
export default function ReviewForm() {

const [name,setName]=useState("")
const [review,setReview]=useState("")
const [rating,setRating]=useState(0)
const [hover,setHover]=useState(0)

const submitReview = async (e) => {
  e.preventDefault();

  const { error } = await supabase
    .from("reviews")
    .insert([
      {
        name,
        review,
        rating,
        approved: true
      }
    ]);

  if (error) {
    console.error(error);
    alert("Error submitting review");
    return;
  }

  alert("Review submitted successfully!");

  // Refresh reviews on page
  if (refreshReviews) {
    refreshReviews();
  }

  // Reset form fields
  setName("");
  setReview("");
  setRating(0);
};
return(

<form className="review-form" onSubmit={submitReview}>

<h3>Share Your Travel Experience</h3>

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<div className="stars">

{[1,2,3,4,5].map((star)=>(
<span
key={star}
onClick={()=>setRating(star)}
style={{
cursor:"pointer",
fontSize:"28px",
color: star <= rating ? "#FFD700" : "#ccc"
}}
>
★
</span>
))}

</div>

<textarea
placeholder="Write your experience..."
value={review}
onChange={(e)=>setReview(e.target.value)}
required
/>

<button type="submit">
Submit Review
</button>

</form>

)
}
