import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Poll from "./Poll";

const mockPollData = {
  pollId: 1,
  question: "How do you feel today?",
  options: [
    { text: "Brilliant! I have so much energy" },
    { text: "Always can be worse." },
    { text: "Please, end my misery." },
  ],
};

describe("Poll Component", () => {
  test("renders the poll question", () => {
    render(<Poll pollId={mockPollData.pollId} question={mockPollData.question} options={mockPollData.options} />);
    expect(screen.getByText(mockPollData.question)).toBeInTheDocument();
  });
});
