// import Button from "../button/Button";
import "./Modal.css";
import { useRef } from "react";

type ModalProps = {
	variant?: "primary" | "secondary";
	onClick?: () => void;
	expanded?: boolean;
	setExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
	style?: React.CSSProperties;
};

const Modal = ({ onClick, style }: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={modalRef} className="modal-container">
			<div style={style} className="modal">
				<div className="header">
					<h3 className="modal-title">Sign up</h3>
					<img src="/close.svg" onClick={onClick} className="close-icon" />
				</div>
				<div className="modal-fields">
					<input
						type="text"
						placeholder="Email"
						className="modal-input"
					></input>
					<input
						type="password"
						placeholder="Password"
						className="modal-input"
					></input>
					<input
						type="password"
						placeholder="Confirm Password"
						className="modal-input"
					></input>
					<div className="submit-btn">Submit</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
