import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { button, Breadcrumb, card, Card } from "react-bootstrap";
import { Button } from "bootstrap";

const VideoCard = () => {
  return (
    <div>
      <Card className="mb-3" style={{ color: "#000" }}>
        <Card.Img src="https://images.news18.com/ibnlive/uploads/2022/01/youtube-logo-164319198616x9.jpg" />
        <Card.Body>
          <Card.Title>Insert Title Logic Here</Card.Title>
          <Card.Text>Insert Comment Logic Here</Card.Text>
          <Button variant="primary">Comment</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default VideoCard;
