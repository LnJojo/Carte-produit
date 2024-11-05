import { useState } from "react";
import Card from "./assets/components/Card";
import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img3.png";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center space-x-2 bg-gray-100">
      <Card
        image={img1}
        title="Raycast Wallpaper #1"
        description="Recreate this wallpaper using AI."
        isPremium={true}
      />
      <Card
        image={img2}
        title="Raycast Wallpaper #2"
        description="Recreate this wallpaper using AI."
        isPremium={true}
      />
      <Card
        image={img3}
        title="Raycast Wallpaper #3"
        description="Recreate this wallpaper using AI."
        isPremium={true}
      />
    </div>
  );
}

export default App;
