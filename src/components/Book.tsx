import React from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";

var sentences= [
  'so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora',
  'so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora can explore her so fat not even Dora can explore her eoauaeu shtaeusaheosun so fat not even Dora',
  'so smelly she put on Right Guard and it went left',
  'so fat she hasn’t got cellulite, she’s got celluheavy',
  'so fat she don’t need no internet – she’s already world wide',
  'so hair her armpits look like Don King in a headlock',
  'so classless she could be a Marxist utopia',
  'so fat she can hear bacon cooking in Canada',
  'so fat she won “The Bachelor” because she all those other bitches',
  'so stupid she believes everything that Brian Williams says',
  'so ugly she scared off Flavor Flav',
  'is like Domino’s Pizza, one call does it all',
  'is twice the man you are',
  'is like Bazooka Joe, 5 cents a blow',
  'is like an ATM, open 24/7',
  'is like a championship ring, everybody puts a finger in her'
];

const PageCover = React.forwardRef((props: any, ref: any) => {
  return (
    <div className={"page page-cover page-cover-" + props.pos } ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <div className="page" ref={ref} data-density={props.density || "soft"}>
      <div className="page-content" style={{ height: '100%' }}>
        <h2 className="page-header">Page header - {props.number}</h2>
        <div
          className="page-image"
          style={{ backgroundImage: "url(images/html/"+ props.image + ")" }}
        ></div>
        {props.children}
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

class DemoBlock extends React.Component {
  flipBook: any;
  state: any;
  constructor(props: any) {
    super(props);

    const pages = [0, 1, 2, 3, 4, 5, 6, 7];

    // let pageNum = 0;
    // for (let i = 0; i < 100; i++) {
    //   pageNum++;
    //   if (pageNum > 8) pageNum = 1;
    //   pages.push(<Page key={i + 1} image={(pageNum) + ".jpg"} number={i + 1} text={sentences[i]}>
    //     </Page>);
    // }

    // pages.push(<PageCover key={101} pos="bottom">THE END</PageCover>);

    this.state = {
      page: 0,
      totalPage: 0,
      orientation: 'landscape',
      state: 'read',
      pages: pages,
      sentences: sentences,
    };
  }

  nextButtonClick = () => {
    this.flipBook.pageFlip().flipNext();
  }

  prevButtonClick = () => {
    this.flipBook.pageFlip().flipPrev();
  }

  onPage = (e: any) => {
    this.setState({
      page: e.data,
    });
  }

  onChangeOrientation = (e: any) => {
    this.setState({
      orientation: e.data,
    });
  }

  onChangeState = (e: any) => {
    this.setState({
      state: e.data,
    });
  }

  componentDidMount() {
    this.setState({
      totalPage: 102,
    });
  }
  handleChange = (page1: any, page2: any, page: any, cb: any) => {
    this.setState({
      // @ts-ignore
      sentences: this.state.sentences.map((sentence, index) => {
        if (index === page) {
          return page1;
        }
        if (index === page + 1 && page2) {
          // @ts-ignore
          return page2 + this.state.sentences[page + 1];
        }
        return sentence;
      })
    }, () => {
      setTimeout(() => {
        cb();
      }, 0);
    });
  }

  render() {
    return (
      <div>
        <div className="container-md" style={{ position: "relative" }}>
          {/* @ts-ignore */}
          <HTMLFlipBook
            width={550}
            height={733}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            // @ts-ignore
            useMouseEvents={!this.state.editMode}
            // @ts-ignore
            key={String(!this.state.editMode)}
            onFlip={this.onPage}
            onChangeOrientation={this.onChangeOrientation}
            onChangeState={this.onChangeState}

            className="flip-book html-book demo-book"
            style={{backgroundImage: "url(images/background.jpg)" }}

            ref={(el) => this.flipBook = el}
          >
            {/* @ts-ignore */}
            {this.state.pages.map(page => {
              // @ts-ignore
              return (<Page key={page + 1} number={page + 1} text={this.state.sentences[page]}
                handleChange={this.handleChange}>

        <textarea
        id={"page" + page}
        readOnly={!this.state.editMode}
        onChange={e => {
          const selectionEnd = e.target.selectionEnd;
          // console.log(e.target.selectionEnd);
          if (e.target.clientHeight < e.target.scrollHeight) {
            const page2 = e.target.value.substring(e.target.value.lastIndexOf(' ') + 1)
            this.handleChange(
              e.target.value.substring(0, e.target.value.lastIndexOf(' ') + 1),
              page2,
              page, () => {
                // e.target.focus()
                if (page % 2 === 0) {
                  this.nextButtonClick();
                  const nextEl = document.getElementById("page" + (page + 1));
                  console.log(nextEl)
                  if (nextEl) {
                    setTimeout(() => {
                      nextEl?.focus();
                      // @ts-ignore
                      nextEl.selectionEnd = page2.length;

                    }, 1000)
                  }
                } else {
                  const nextEl = document.getElementById("page" + (page + 1));
                  console.log(nextEl)
                  if (nextEl) {
                    setTimeout(() => {
                      nextEl?.focus();
                      // @ts-ignore
                      nextEl.selectionEnd = page2.length;

                    }, 1000)
                  }
                }
              })
          } else {
            this.handleChange(e.target.value, null, page, () => {
              e.target.focus();
              e.target.selectionEnd = selectionEnd;
            });
          }
        }}
        // @ts-ignore
        value={this.state.sentences[page]}
        style={{ outline: 'none', border: 'none',
        overflow: 'hidden',
        resize: 'none', width: '100%', height: '100%' }}></textarea>
                </Page>)
            })}
          </HTMLFlipBook>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-info btn-sm btn-prev"
                onClick={this.prevButtonClick}
              >
                Previous page
              </button>
              {/* @ts-ignore */}
                [<span>{this.state.page + 1}</span> of <span>{this.state.totalPage}</span>]
              <button
                type="button"
                className="btn btn-info btn-sm btn-next"
                onClick={this.nextButtonClick}
              >
                Next page
              </button>
              <button
                type="button"
                className="btn btn-info btn-sm btn-next"
                // @ts-ignore
                onClick={() => this.setState({ editMode: !this.state.editMode })}
              >
                Edit
              </button>
            </div>
            <div className="col-md-6">
              {/* @ts-ignore */}
              State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoBlock;


document.addEventListener('DOMContentLoaded', function() {
  let isVisible = false;
  const demoSource = document.querySelector('.demo-source');

  // @ts-ignore
  // document.querySelector('.btn-source').addEventListener('click', () => {
  //     if (!isVisible) {
  //       // @ts-ignore
  //       demoSource.style.display = 'block'
  //     }
  //     else {
  //       // @ts-ignore
  //       demoSource.style.display = 'none'
  //     }

  //     isVisible = !isVisible;
  // });
});