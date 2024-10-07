import { useState } from "react";
import { flushSync } from "react-dom";
import "./App.css";

import { cards } from "./constants/constants";

import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";
import CourseCard from "./components/course-card/CourseCard";
import ProfessorCard from "./components/professor-card/ProfessorCard";

import BaseWave from "./assets/bg-waves/base-wave.svg?react";
import PrimaryWave from "./assets/bg-waves/primary-wave.svg?react";
import SecondaryWave from "./assets/bg-waves/secondary-wave.svg?react";
import TertiaryWave from "./assets/bg-waves/tertiary-wave.svg?react";
import SplashWaveStart from "./assets/bg-waves/splash-wave-start.svg?react";
import SplashWaveEnd from "./assets/bg-waves/splash-wave-end.svg?react";
import Star from "./assets/star.svg?react";

export default function Home() {
	const [signUpOpen, setSignUpOpen] = useState(false);

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

	return (
		<>
			<Navbar
				navLinks={[
					{ title: "Penn\u00A0State", href: "/" },
					{ title: "Rutgers", href: "/" }
				]}
			/>
			{signUpOpen && <Modal onClick={() => handleExpand()} />}
			<div id="home" className="main">
				<div className="center">
					<div className="main-text">
						<h2>Learn More About Your Classes</h2>
						<p>
							Empower your academic journey with insights from real student
							experiences. Share your own experiences and light the path for
							your peers.
						</p>

						{!signUpOpen && (
							<button id="signup-button" onClick={() => handleExpand()}>
								<span id="button-text">Explore Your School&apos;s Page</span>
								<div className="modal-fields"></div>
							</button>
						)}
					</div>
				</div>
				<PrimaryWave className="wav primary-wave" fill="#E6AF2E" />
				<SecondaryWave className="wav secondary-wave" fill="#E6AF2E" />
				<TertiaryWave className="wav tertiary-wave" fill="#E6AF2E" />
				<BaseWave className="base-wave" fill="#f4f4ff" />
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
						landscape you&apos;re navigating.
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
					<CourseCard
						course={{
							name: "MATH102",
							subject: "Mathematics",
							color: "red",
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
				</div>
			</div>
			<div className="professors">
				<div className="text professors-text">
					<h3>Know your Professor</h3>
					<p>
						Step into the academic inner circle with detailed professor reviews.
						From teaching styles to grading fairness, discover what makes each
						educator unique. With ClassReveal, you&apos;re not just choosing
						classes; you&apos;re selecting the mentors who will shape your
						educational voyage, course by course.
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
					<ProfessorCard
						course={{
							name: "Bob Dylan",
							subject: "Mathematics Professor",
							professor: "Professor 1",
							rating: 5,
							reviews: 10,
							description: "This is a course description",
							tags: ["MATH101", "MATH102", "Approachable", "Office Hours"]
						}}
					/>
					<ProfessorCard
						course={{
							name: "Post Malone",
							subject: "Economics Professor",
							professor: "Professor 1",
							rating: 5,
							reviews: 10,
							description: "This is a course description",
							tags: ["ECON101", "ECON202", "Approachable", "Office Hours"]
						}}
					/>
					<ProfessorCard
						course={{
							name: "Lebron James",
							subject: "Physics Professor",
							professor: "Professor 1",
							rating: 5,
							reviews: 10,
							description: "This is a course description",
							tags: ["PHYS211", "PHYS202", "Approachable", "Office Hours"]
						}}
					/>
					<ProfessorCard
						course={{
							name: "Metro Boomin",
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
			<div id="faq" className="faq">
				<div className="faq-container">
					<h3 className="text">Frequenty Asked Questions</h3>
					<div className="cards">
						{cards.map((card) => (
							<div className="card" key={card.id}>
								<h5>{card.title}</h5>
								<p>{card.content}</p>
							</div>
						))}
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
