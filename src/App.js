import React from "react";
import headshot from "./headshot.jpg";
import Hyperlink from "./Components/Hyperlink.js";
import "./index.css";

const App = () => {
	return (
		<div className="page-container">
			<div className="header-container">
				<img
					src={headshot}
					style={{ width: 200, height: 200, borderRadius: "50%" }}
					alt="Xue's headshot"
				/>
				<h1>Xue Jiang</h1>
				<p className="intro-wrapper">
					Hi! I'm pursuing a degree in{" "}
					<i style={{ color: "#d991bb" }}>Computer Science</i> with a
					minor in <i style={{ color: "#d7730f" }}>Design</i> at the
					University of Pennsylvania.
					<br />I love cats, soup, art museums, and movies. Fun fact:
					my name means snow in Chinese!
				</p>
			</div>
			<div className="flex-wrapper">
				<h2>Where to find me...</h2>
				<h2>Where I hope to be...</h2>
			</div>
			<div className="flex-wrapper-body">
				<div className="list">
					<ul>
						<li>Studying CS and Design @ UPenn</li>
						<li>
							<Hyperlink
								href={"mailto:haoxuej@seas.upenn.edu"}
								color={"#d19209"}
								text={"haoxuej@seas.upenn.edu"}
							/>
						</li>
						<li>
							<Hyperlink
								href={"https://xue-portfolio.vercel.app/"}
								color={"#8f64ae"}
								text={"My Portfolio Website"}
							/>
						</li>
						<li>
							<Hyperlink
								href={"https://www.linkedin.com/in/haoxuej/"}
								color={"#72a9c6"}
								text={"LinkedIn"}
							/>
						</li>
						<li>
							<Hyperlink
								href={"https://github.com/xuelikesnow"}
								color={"#1b4c21"}
								text={"GitHub"}
							/>
						</li>
						<li>Somewhere staying 3 hours at an art museum</li>
					</ul>
				</div>
				<div className="list">
					<ul>
						<li>
							Tech (SWE, front-end, UX research, etc.) at a
							digital media-focused company
						</li>
						<li>Film/TV production</li>
						<li>Somewhere in an apartment with 2 cats and 1 dog</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
