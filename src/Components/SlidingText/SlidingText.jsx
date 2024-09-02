import React from "react";
import '../../App.css'; // Import custom CSS for keyframes

const SlidingText = () => {
  return (
    <div className="overflow-hidden">
      <div className="animate-slide text-2xl whitespace-nowrap">
        <span className="inline-block">
          <span className="text-black text-2xl font-bold mr-8">
            "फसलों की खरीद और बिक्री, अब एक क्लिक पर।"
          </span>
          <span className="text-red-600 text-2xl font-bold mr-8">
            "किसानों के सवाल, हमारे समाधान।"
          </span>
          <span className="text-black text-2xl font-bold mr-8">
          "फसल से लेकर बाजार तक, हर कदम पर साथ।"
          </span>
          
          <span className="text-red-600 text-2xl font-bold">
          "किसानों के लिए आसान समाधान, बस एक क्लिक की दूरी पर।"
          </span>
        </span>
      </div>
    </div>
  );
};

export default SlidingText;
