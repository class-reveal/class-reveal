import "./Modal.css";

type ModalProps = {
	variant?: "primary" | "secondary";
	onClick?: () => void;
	expanded?: boolean;
	setExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
	style?: React.CSSProperties;
};

const Modal = ({ onClick, style }: ModalProps) => {
	return (
		<div className="modal-container">
			<div style={style} className="modal">
				<div className="header">
					<h3 className="modal-title">Explore Your School&apos;s Page</h3>
					<span className="close-icon" onClick={onClick}>
						&#x2715;
					</span>
				</div>
				<form className="modal-fields">
					<input type="text" placeholder="Email" className="modal-input" />
					<input
						type="password"
						placeholder="Password"
						className="modal-input"
					/>
					<input
						type="password"
						placeholder="Confirm Password"
						className="modal-input"
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
};

export default Modal;
