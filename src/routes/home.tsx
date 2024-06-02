import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import { auth } from "../firebase";

export default function Home() {
  const Wrapper = styled.div``;

  return (
    <Wrapper>
      <PostTweetForm></PostTweetForm>
    </Wrapper>
  );
}
