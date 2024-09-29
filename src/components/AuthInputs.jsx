import { useState } from "react";

export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === "email") {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		setSubmitted(true);
	}

	const emailNotValid = submitted && !enteredEmail.includes("@");
	const passwordNotValid = submitted && enteredPassword.trim().length < 6;

	// Oddzielne klasy dla e-maila i hasła
	let emailLabelClasses =
		"block mb-2 text-xs font-bold tracking-wide uppercase ";
	let passwordLabelClasses =
		"block mb-2 text-xs font-bold tracking-wide uppercase ";

	if (emailNotValid) {
		emailLabelClasses += "text-red-400"; // Dla niepoprawnego e-maila
		emailLabelClasses += " ";
	} else {
		emailLabelClasses += "text-stone-300"; // Dla poprawnego e-maila
		emailLabelClasses += " ";
	}

	if (passwordNotValid) {
		passwordLabelClasses += "text-red-400"; // Dla niepoprawnego hasła
		passwordLabelClasses += " ";
	} else {
		passwordLabelClasses += "text-stone-300"; // Dla poprawnego hasła
		passwordLabelClasses += "	";
	}

	return (
		<div id="auth-inputs">
			<div className="flex flex-col gap-2 mb-6">
				<p>
					<label className={emailLabelClasses}>Email</label>
					<input
						type="email"
						className={`w-full p-3 leading-6 bg-gray-300 text-gray-700 rounded-md shadow-sm border-transparent ${
							emailNotValid ? "bg-red-200" : ""
						}`}
						onChange={(event) => handleInputChange("email", event.target.value)}
					/>
				</p>
				<p>
					<label className={passwordLabelClasses}>Password</label>
					<input
						type="password"
						className={`w-full p-3 leading-6 bg-gray-300 text-gray-700 rounded-md shadow-sm border-transparent ${
							passwordNotValid ? "bg-red-200" : ""
						}`}
						onChange={(event) =>
							handleInputChange("password", event.target.value)
						}
					/>
				</p>
			</div>
			<div className="actions flex justify-between">
				<button
					type="button"
					className="text-sm text-gray-600 hover:text-gray-800"
				>
					Create a new account
				</button>
				<button
					className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
					onClick={handleLogin}
				>
					Sign In
				</button>
			</div>
		</div>
	);
}
