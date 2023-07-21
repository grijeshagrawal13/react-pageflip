import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";
import { IPage, pages } from "./pages";

const Book = (props: any) => {
  const textAreaRefs = useRef<any>([]);
  const bookRef = useRef<any>();
  const [editModeOn, setEditModeOn] = useState<boolean>(false);

  if (textAreaRefs.current.length !== pages.length) {
    textAreaRefs.current = Array.from(
      { length: pages.length },
      (_, i) => textAreaRefs.current[i] || React.createRef()
    );
  }

  const handleFlip = (index: number) => {
    if (index % 2 === 0) {
      bookRef.current.pageFlip().flipNext("bottom");
    } else {
      bookRef.current.pageFlip().flipPrev("bottom");
    }
  };

  const handleOnChange = (pageNumber: number, data: string) => {
    pages[pageNumber - 1].pageContent = data;
    if (data.length === 700) {
      if (pageNumber % 2 === 0 && pageNumber <= pages.length) {
        bookRef.current.pageFlip().flipNext("top");
        setTimeout(() => {
          textAreaRefs.current[pageNumber].current.focus();
        }, 2000);
      } else {
        textAreaRefs.current[pageNumber].current.focus();
      }
    }
  };

  return (
    <div className="root">
      <h1>The Great Gatsby by F. Scott Fitzgerald</h1>
      <HTMLFlipBook
        {...props}
        ref={bookRef}
        width={550}
        height={733}
        useMouseEvents={false}
      >
        {pages.map((item: IPage, index: number) => (
          <div
            className="page"
            onClick={() => {
              editModeOn ? console.log("") : handleFlip(item.pageNumber);
            }}
          >
            <div className="page-content">
              <img
                src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg"
                alt="cover image"
                className="page-image"
              />

              <textarea
                key={index}
                readOnly={!editModeOn}
                className="page-textarea"
                autoFocus={true}
                ref={textAreaRefs.current[index]}
                defaultValue={pages[item.pageNumber - 1].pageContent}
                onChange={(event: any) => {
                  handleOnChange(item.pageNumber, event.target.value);
                }}
              />

              <p className="page-footer">{item.pageNumber}</p>
            </div>
          </div>
        ))}
      </HTMLFlipBook>

      <div style={{ marginTop: 50 }}>
        {editModeOn ? (
          <button
            type="button"
            className="material-button"
            onClick={() => {
              setEditModeOn(false);
            }}
          >
            close
          </button>
        ) : (
          <button
            type="button"
            className="material-button"
            onClick={() => {
              setEditModeOn(true);
            }}
          >
            edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Book;
