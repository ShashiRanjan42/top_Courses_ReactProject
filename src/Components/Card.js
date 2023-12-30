import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let liked = props.liked;
  let setLiked = props.setLiked;

  function clickhandler()
  {
    if(liked.includes(course.id))
    {
      // means like hai
      setLiked((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Liked Removed");
    }
    else
    {
      //phle se koi like nhi hai 
      if(liked.length === 0)
      {
        setLiked([course.id]);
        toast.success("Liked Sucessfully");
      }
      else
      {
        // koi course phle se like aur like krna hai
        setLiked((prev) => ([...prev , course.id]));
        toast.success("Liked Sucessfully")

      }
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} />

        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center">
              
          <button onClick={clickhandler}>
            {
              !liked.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem" />)
            }
          </button>

        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-white mt-2">{course.description.length > 100 ? (course.description.substring(0,100) + "...") : (course.description)}</p>
      </div>
    </div>
  );
}

export default Card;
