import "./ProfessorCard.css";
import star from "../../assets/star.svg";

type ProfessorCardProps = {
	course: {
		name: string;
		professor: string;
		rating: number;
		reviews: number;
		description: string;
		subject: string;
		tags: string[];
	};
};

const ProfessorCard = ({ course }: ProfessorCardProps) => {
	const { name, rating, tags } = course;
	return (
		<div className="professor-card">
			<div className="professor-card-content">
				<div className="title">
					<h4>{name}</h4>
					<div className="rating-container">
						<h6>{rating}</h6>
						<div className="rating-stars">
							{Array.from({ length: rating }, (_, index) => (
								<img key={index} src={star} height={20} alt="star" />
							))}
						</div>
					</div>
				</div>
				<div className="subject">
					<p>{course.subject}</p>
				</div>
				<div className="tags">
					{tags.map((tag, index) => (
						<span key={index} className={`tag ${tags[0]}`}>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfessorCard;
