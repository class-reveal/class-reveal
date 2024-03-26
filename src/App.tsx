import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";
import { flushSync } from "react-dom";

import BaseWave from "./assets/bg-waves/base-wave.svg?react";
import PrimaryWave from "./assets/bg-waves/primary-wave.svg?react";
import SecondaryWave from "./assets/bg-waves/secondary-wave.svg?react";
import TertiaryWave from "./assets/bg-waves/tertiary-wave.svg?react";
import SplashWaveStart from "./assets/bg-waves/splash-wave-start.svg?react";
import SplashWaveEnd from "./assets/bg-waves/splash-wave-end.svg?react";
import BookAndGlass from "./assets/BookAndGlass.svg?react";
import Star from "./assets/star.svg?react";
import CourseCard from "./components/course-card/CourseCard";
import ProfessorCard from "./components/professor-card/ProfessorCard";

function App() {
	const [isNotAtTop, setIsNotAtTop] = useState(false);
	const [signUpOpen, setSignUpOpen] = useState(false);
	const [collapsible, setCollapsible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsNotAtTop(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		function updateSize() {
			if (window.innerWidth > 800) {
				setCollapsible(false);
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const handleExpand = () => {
		if (!document.startViewTransition) {
			setSignUpOpen((prev) => !prev);
			return;
		}
		document.startViewTransition(() => {
			flushSync(() => {
				setSignUpOpen((prev) => !prev);
			});
		});
	};

	const handleCollapse = (value?: boolean) => {
		value ? setCollapsible(value) : setCollapsible((prev) => !prev);
	};

	const cards = [
		{
			id: 1,
			title: "What is ClassReveal?",
			content:
				"ClassReveal is a comprehensive platform designed to empower students by providing detailed reviews, ratings, and insights into courses, professors, and academic departments. It aims to enhance the decision-making process for course selection, ensuring a more informed and fulfilling academic experience."
		},
		{
			id: 2,
			title: "How can I submit a review?",
			content:
				"Once you're logged in to your school's page, navigate to the 'Submit a Review' section. Select your course and professor, and fill out the form with your insights and experiences, and hit submit. Your feedback is invaluable and helps the whole student community!"
		},
		{
			id: 3,
			title: "Can I review a course I took in a previous semester?",
			content:
				"Absolutely! We encourage reviews for courses taken at any time. The more data we collect, the more helpful the platform becomes for everyone."
		},
		{
			id: 4,
			title: "Are the reviews I post anonymous?",
			content:
				"Yes, all reviews submitted on ClassReveal are anonymous, and we only share your major and year at the time of the course. We respect your privacy and understand the importance of honest, uninfluenced feedback."
		},
		{
			id: 5,
			title: "How are the course and professor ratings calculated?",
			content:
				"Ratings are aggregated from all submitted student reviews. Each aspect, like course difficulty or professor effectiveness, is calculated based on the average score given by students who have taken the course or had the professor."
		},
		{
			id: 6,
			title: "What should I do if I encounter a technical issue?",
			content:
				"If you experience any technical problems, please contact our support team by emailing support@classreveal.com. Provide a detailed description of the issue, and we’ll work to resolve it as quickly as possible."
		}
	];

	return (
		<>
			{isNotAtTop ? (
				<Navbar
					collapsible={collapsible}
					onClick={() => handleCollapse()}
					variant="scrolled"
				/>
			) : (
				<Navbar collapsible={collapsible} onClick={() => handleCollapse()} />
			)}
			{signUpOpen && <Modal onClick={() => handleExpand()} />}
			<div className="main">
				<div className="center">
					<div className="left">
						<div className="main-text">
							<h2>Learn More About your Classes</h2>
							<p>
								Empower your academic journey with insights from real student
								experiences. Share your own experiences and light the path for
								your peers.
							</p>
							<h6>
								Currently at Penn State and Rutgers. More schools coming soon.
							</h6>

							{!signUpOpen && (
								<button id="signup-button" onClick={() => handleExpand()}>
									<span id="button-text">Sign up</span>
								</button>
							)}
						</div>
					</div>
					<div className="right">
						<div className="icon-container">
							<BookAndGlass className="icon" />
							{/* <img className="icon" alt="Logo" src="/BookAndGlass.svg" /> */}
						</div>
					</div>
				</div>
				<PrimaryWave className="wav primary-wave" />
				<SecondaryWave className="wav secondary-wave" />
				<TertiaryWave className="wav tertiary-wave" />
				<BaseWave className="base-wave" />
			</div>
			<div className="stats">
				<div className="text left">
					<h5>12,465 REVIEWS</h5>
					<h5>9,294 COURSES</h5>
					<h5>12,847 PROFESSORS</h5>
				</div>
				<div className="text right">
					<h3>Real Student Feedback</h3>
					<p>
						Only students with a .edu email from their university can post
						course reviews. And since reviews are grouped by semester, you can
						save yourself from making decisions based on outdated information.
					</p>
				</div>
			</div>
			<div className="glance">
				<div className="text glance-text">
					<h3>Your School at a Glance</h3>
					<p>
						Step back and see the bigger picture with metric visualizations
						across courses, professors, departments, and your entire school.
						Compare courses and instructors side by side, identify strengths and
						opportunities for improvement, and understand the educational
						landscape you're navigating.{" "}
					</p>
				</div>
			</div>
			<hr />
			<div className="unpack">
				<div className="text unpack-text">
					<h3>Unpack Your Course Experience</h3>
					<p>
						How did a course or professor shape your academic landscape? Submit
						a review to represent your overall experience and contribute to a
						collective course compass. Your review lights the path for your
						peers for years to come.
					</p>
					<div className="stars">
						<Star className="star" />
						<Star className="star" />
						<Star className="star" />
						<Star className="star" />
						<Star className="star" />
					</div>
				</div>
			</div>
			<SplashWaveStart className="splash-start" />
			{/* <img src={splashWaveStart} alt="" className="splash-start" /> */}
			<div className="courses">
				<div className="text courses-text">
					<h3>Discover Courses</h3>
					<p>
						Dive into detailed reviews and ratings to discover the best courses
						and professors at your university. Empower your academic journey
						with firsthand knowledge from your peers.
					</p>
				</div>
				<div className="course-cards">
					<CourseCard
						course={{
							name: "MATH101",
							subject: "Mathematics",
							credits: 4,
							professor: "Professor 1",
							rating: 5,
							reviews: 10,
							color: "red",
							description: "This is a course description",
							tags: [
								"HARD",
								"Homework-Heavy",
								"Exam-Heavy",
								"Lecture",
								"Mandatory Attendance"
							]
						}}
					/>
					<CourseCard
						course={{
							name: "PHYS211",
							subject: "Physics",
							credits: 4,
							professor: "Professor 1",
							rating: 5,
							color: "green",
							reviews: 10,
							description: "This is a course description",
							tags: [
								"Lecture/Lab/Recitation",
								"Exam-Heavy",
								"Homework-Heavy",
								"Mandatory Attendance"
							]
						}}
					/>
					<CourseCard
						course={{
							name: "ECON102",
							subject: "Economics",
							credits: 3,
							professor: "Professor 1",
							color: "purple",
							rating: 5,
							reviews: 10,
							description: "This is a course description",
							tags: [
								"HARD",
								"Homework-Heavy",
								"Exam-Heavy",
								"Lecture",
								"Mandatory Attendance"
							]
						}}
					/>
					<CourseCard
						course={{
							name: "HIST104",
							subject: "History",
							color: "orange",
							credits: 4,
							professor: "Professor 1",
							rating: 5,
							reviews: 10,
							description: "This is a course description",
							tags: [
								"HARD",
								"Homework-Heavy",
								"Exam-Heavy",
								"Lecture",
								"Mandatory Attendance"
							]
						}}
					/>
				</div>
			</div>
			<div className="professors">
				<div className="text professors-text">
					<h3>Know your Professor</h3>
					<p>
						Step into the academic inner circle with detailed professor reviews.
						From teaching styles to grading fairness, discover what makes each
						educator unique. With ClassReveal, you're not just choosing classes;
						you're selecting the mentors who will shape your educational voyage,
						course by course.
					</p>
				</div>
				<div className="professor-cards">
					<ProfessorCard
						course={{
							name: "Riley Meade",
							subject: "Mathematics",
							professor: "Professor 1",
							rating: 5,
							reviews: 10,
							description: "This is a course description",
							tags: ["MATH101", "MATH102", "Approachable", "Office Hours"]
						}}
					/>
					<ProfessorCard
						course={{
							name: "Max Polyak",
							subject: "Physics Professor",
							professor: "Professor 1",
							rating: 5,
							reviews: 10,
							description: "This is a course description",
							tags: ["PHYS211", "PHYS212", "Approachable", "Office Hours"]
						}}
					/>
					<ProfessorCard
						course={{
							name: "Jivi Irivichetty",
							subject: "Economics Professor",
							professor: "Professor 1",
							rating: 5,
							reviews: 10,
							description: "This is a course description",
							tags: ["ECON101", "ECON 102", "Approachable", "Office Hours"]
						}}
					/>
					<ProfessorCard
						course={{
							name: "John Doe",
							subject: "History Professor",
							professor: "Professor 1",
							rating: 5,
							reviews: 10,
							description: "This is a course description",
							tags: ["HIST101", "HIST102", "Approachable", "Office Hours"]
						}}
					/>
				</div>
			</div>
			<SplashWaveEnd className="splash-end" />
			{/* <img src={splashWaveEnd} alt="" className="splash-end" /> */}
			<div className="faq">
				<div className="faq-container">
					<h3 className="text">Frequenty Asked Questions</h3>
					<div className="cards">
						{cards.map((card) => (
							<div className="card" key={card.id}>
								<h4>{card.title}</h4>
								<p>{card.content}</p>
							</div>
						))}
					</div>
					<div className="faq-bg">
						<img src="/faq-left.svg" alt="" className="faq-left" />
						<img src="/faq-right.svg" alt="" className="faq-right" />
					</div>
				</div>
			</div>
			<div className="school">
				<div className="text school-text">
					<h3>Want to see ClassReveal at your university?</h3>
					<button id="school-button">Let us know!</button>
				</div>
			</div>
			<div className="footer">
				<img src="/footer.svg" alt="" className="footer-wave" />
			</div>
		</>
	);
}

export default App;
