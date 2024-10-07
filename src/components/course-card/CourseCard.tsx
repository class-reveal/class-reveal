import "./CourseCard.css";
import star from "../../assets/star.svg";
// import Image from "next/image";

type CourseCardProps = {
	course: {
		name: string;
		professor: string;
		rating: number;
		reviews: number;
		description: string;
		credits: number;
		subject: string;
		tags: string[];
		color: string;
	};
};

const CourseCard = ({ course }: CourseCardProps) => {
	const { name, rating, tags, color } = course;
	return (
		<div className={`course-card ${color}`}>
			<div className="course-card-content">
				<div className="title">
					<h4>{name}</h4>
					<div className="rating-container">
						<h6>{rating}</h6>
						<div className="rating-stars">
							{Array.from({ length: rating }, (_, index) => (
								<img height={20} key={index} src={star} alt="star" />
							))}
						</div>
					</div>
				</div>
				<div className="subject">
					<p>{course.subject}</p>
					<p className="credits">{course.credits} Credits</p>
				</div>
				<div className="tags">
					{tags.map((tag, index) => (
						<span key={index} className="tag">
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
