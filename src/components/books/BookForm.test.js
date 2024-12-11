import React from "react";
import { render, screen } from "@testing-library/react";
import BookForm from "./BookForm";

function renderBookForm(args) {
  let defaultProps = {
    authors: [],
    book: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<BookForm {...props} />);
}

it("should render Add Book header", () => {
  renderBookForm();
  screen.getByRole("heading", { name: "Add Book" });
});

it('should label save button as "Save" when not saving', () => {
  renderBookForm();
  screen.getByRole("button", { name: "Save" });
});

it('should label save button as "Saving..." when saving', () => {
  renderBookForm({ saving: true });
  screen.getByRole("button", { name: "Saving..." });
});
