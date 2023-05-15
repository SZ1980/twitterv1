import React from "react";
import ProfileImage from "./ProfileImage";
import { Button } from "./Button";

function NewTweetForm() {
  return (
    <form>
      <div>
        <ProfileImage />
        <textarea placeholder="Wahts happening" /> text
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}

export default NewTweetForm;
