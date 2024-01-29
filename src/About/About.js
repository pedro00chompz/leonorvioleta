//About.js

import { useEffect, useState } from "react";

export default function About(props) {
  const { navbarHeight } = props;

  const imgPaddingTop = navbarHeight * 2;

  const [windowHeightInRem, setWindowHeightInRem] = useState(0);
  const [windowValueToUse, setWindowValueToUse] = useState(0);

  const [section01, setSection01] = useState({});
  const [section02, setSection02] = useState({});
  const [section03, setSection03] = useState({});
  const [section04, setSection04] = useState({});

  useEffect(() => {
    fetch("http://localhost/wordpressVioleta/wp-json/wp/v2/about")
      .then((response) => response.json())
      .then((data) => {
        const firstElement = data[0];
        setSection01({
          text: firstElement.acf.text,
          email: firstElement.acf.email.replace("http://", ""),
          instagram: firstElement.acf.instagram.url,
        });
        setSection02({
          bio01: firstElement.acf.bio_01,
          bio02: firstElement.acf.bio_02,
          image: firstElement.acf.bio_image.url,
        });
        setSection04({
          placeholder: firstElement.acf.placeholder,
        });
      })
      .catch((error) => {
        console.error("Error fetching ACF data", error);
      });
  }, []);

  useEffect(() => {
    const calculateWindowHeightInRem = () => {
      const baseFontSize = 16; // Default base font size in pixels
      const windowHeightInRem = window.innerHeight / baseFontSize;
      setWindowHeightInRem(windowHeightInRem);
      setWindowValueToUse(windowHeightInRem - 6); // Set windowValueToUse to windowHeightInRem
    };

    // Initial calculation
    calculateWindowHeightInRem();

    // Recalculate on window resize
    window.addEventListener("resize", calculateWindowHeightInRem);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateWindowHeightInRem);
    };
  }, []);

  console.log(section01);
  console.log(windowValueToUse);

  const halfValue = windowValueToUse / 2;

  console.log(halfValue);

  const handleEmailClick = () => {
    window.open("mailto:aleonorvioleta@gmail.com", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/leonorvioleta/", "_blank");
  };

  return (
    <>
      {/* Small Screens */}
      <div className="d-sm-block d-md-none" style={{ marginTop: "7rem" }}>
        <img
          src={section02.image}
          className="img-fluid"
          style={{
            padding: "1rem",
            borderBottom: "0.08rem solid black",
          }}
          alt="Leonor Violeta Profile Photo"
        />
        <div
          style={{
            padding: "1rem",
            borderBottom: "0.08rem solid black",
          }}
          className="text-start"
        >
          <div className="text-uppercase" style={{ paddingBottom: "1rem" }}>
            contact
          </div>
          <div style={{ lineHeight: "1.2rem", paddingBottom: "1rem" }}>
            {section01.text}
          </div>
          <div
            className="text-decoration-underline"
            onClick={() => window.open(`mailto:${section01.email}`, "_blank")}
          >
            {section01.email}
          </div>
          <div
            className="text-decoration-underline"
            onClick={() => window.open(section01.instagram, "_blank")}
          >
            instagram
          </div>
          {/*                     <div style={{lineHeight:"1.2rem"}}>
                        Hello ☺ I’m available to freelance projects, collaborations, comissioned illustrations.
                    </div>
                    <div style={{paddingBottom:"1rem"}}>
                        Feel free to contact me :)
                    </div>
                    <div className="text-decoration-underline" onClick={handleEmailClick}>
                        aleonorvioleta@gmail.com
                    </div>
                    <div className="text-decoration-underline" onClick={handleInstagramClick}>
                        instagram
                    </div> */}
        </div>
        <div
          style={{
            padding: "1rem",
            borderBottom: "0.08rem solid black",
          }}
          className="text-start"
        >
          <div style={{ lineHeight: "1.2rem" }}>
            {section02.bio01 &&
              section02.bio01.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-0">
                  {paragraph}
                </p>
              ))}
          </div>

          <div style={{ lineHeight: "1.2rem" }}>
            {section02.bio02 &&
              section02.bio02.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-0">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            borderBottom: "0.08rem solid black",
          }}
          className="text-start"
        >
          You can also find my work at
          <div style={{ paddingTop: "1rem" }}>
            <a
              className="mb-0 text-decoration-underline d-block text-black"
              href="#"
              target="_blank"
            >
              Águas Furtadas
            </a>
            <a
              className="mb-0 text-decoration-underline d-block text-black"
              href="#"
              target="_blank"
            >
              Oficina Mescla
            </a>
            <a
              className="mb-0 text-decoration-underline d-block text-black"
              href="#"
              target="_blank"
            >
              Lusco Fusco
            </a>
            <a
              className="mb-0 text-decoration-underline d-block text-black"
              href="#"
              target="_blank"
            >
              Malapata Gallery
            </a>
            <a
              className="mb-0 text-decoration-underline d-block text-black"
              href="#"
              target="_blank"
            >
              Unwind Studio
            </a>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
          }}
          className="text-start"
        >
          <div style={{ lineHeight: "1.2rem" }}>
            {section04.placeholder && section04.placeholder.trim() !== "" && (
              <div
                style={{
                  padding: "1rem",
                }}
                className="text-start"
              >
                <div style={{ lineHeight: "1.2rem" }}>
                  {section04.placeholder.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Large Screens */}
      <div
        className="d-none d-md-block"
        style={{ marginTop: "3.5rem", overflow: "hidden" }}
      >
        <img
          src={section02.image}
          className="align-self-start"
          alt="Leonor Violeta Profile Photo"
          style={{
            paddingRight: "2rem",
            height: "22rem",
            width: "auto",
            zIndex: "1000",
            position: "fixed",
            top: `${imgPaddingTop}px`,
            right: "0.5em",
          }}
        />
        <div
          className="row text-start"
          style={{
            borderBottom: "0.08rem solid black",
            height: `${halfValue}rem`,
          }}
        >
          <div
            className="col-4"
            style={{
              borderRight: "0.08rem solid black",
              paddingLeft: "3rem",
            }}
          >
            <div
              className="text-uppercase"
              style={{
                paddingTop: `${navbarHeight}px`,
                paddingBottom: "1rem",
              }}
            >
              contact
            </div>
            <div style={{ lineHeight: "1.2rem", paddingBottom: "1rem" }}>
              {section01.text}
            </div>
            <div
              className="text-decoration-underline"
              onClick={() => window.open(`mailto:${section01.email}`, "_blank")}
            >
              {section01.email}
            </div>
            <div
              className="text-decoration-underline"
              onClick={() => window.open(section01.instagram, "_blank")}
            >
              instagram
            </div>
          </div>
          <div className="col-1"></div>
          <div
            className="col-7"
            style={{ paddingLeft: "1rem", paddingTop: `${navbarHeight}px` }}
          >
            <div
              className="col-6"
              style={{ paddingBottom: "3rem", lineHeight: "1.2rem" }}
            >
              {section02.bio01 &&
                section02.bio01.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-0">
                    {paragraph}
                  </p>
                ))}

              <p style={{ paddingBottom: "1rem" }}></p>

              {section02.bio02 &&
                section02.bio02.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-0">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div
          className="row text-start"
          style={{
            borderBottom: "0.08rem solid black",
            height: `${halfValue}rem`,
          }}
        >
          <div
            className="col-4"
            style={{
              borderRight: "0.08rem solid black",
              paddingLeft: "3rem",
            }}
          >
            <div
              style={{
                paddingTop: "3rem",
              }}
            >
              You can also find my work at
            </div>
            <div style={{ paddingTop: "1rem" }}>
              <a
                className="mb-0 text-decoration-underline d-block aboutLink"
                href="#"
                target="_blank"
              >
                Águas Furtadas
              </a>
              <a
                className="mb-0 text-decoration-underline d-block  aboutLink"
                href="#"
                target="_blank"
              >
                Oficina Mescla
              </a>
              <a
                className="mb-0 text-decoration-underline d-block  aboutLink"
                href="#"
                target="_blank"
              >
                Lusco Fusco
              </a>
              <a
                className="mb-0 text-decoration-underline d-block  aboutLink"
                href="#"
                target="_blank"
              >
                Malapata Gallery
              </a>
              <a
                className="mb-0 text-decoration-underline d-block  aboutLink"
                href="#"
                target="_blank"
              >
                Unwind Studio
              </a>
            </div>
          </div>
          <div className="col-1"></div>
          <div
            className="col-7"
            style={{
              paddingLeft: "1rem",
              paddingTop: `${navbarHeight}px`,
            }}
          >
            <div
              className="col-6"
              style={{ paddingBottom: "3rem", lineHeight: "1.2rem" }}
            >
              {section04.placeholder &&
                section04.placeholder.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-0"
                    style={index === 1 ? { paddingBottom: "1rem" } : {}}
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
