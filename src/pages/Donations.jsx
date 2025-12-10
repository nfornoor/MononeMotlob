import React, { useState, useMemo } from "react";
import DonationFilters from "../components/DonationFilters";
import DonationsList from "../components/DonationsList";
import { TrendingUp, Users, CheckCircle, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FooterLanding from "../components/FooterLanding";

const sampleDonations = [
	{
		id: 1,
		txnId: "TXN-2025-001",
		donor: "Kamal Ahmed",
		email: "kamal@example.com",
		project: "School Building",
		amount: 50000,
		method: "bKash",
		status: "Completed",
		date: "28 November 2025",
		icon: "💳",
	},
	{
		id: 2,
		txnId: "TXN-2025-002",
		donor: "Fatema Rahman",
		email: "fatema@example.com",
		project: "Medical Equipment",
		amount: 25000,
		method: "Nagad",
		status: "Completed",
		date: "27 November 2025",
		icon: "💚",
	},
	{
		id: 3,
		txnId: "TXN-2025-003",
		donor: "John Smith",
		email: "john@example.com",
		project: "Scholarship Fund",
		amount: 100,
		method: "Stripe",
		status: "Pending",
		date: "28 November 2025",
		icon: "🟠",
	},
	{
		id: 4,
		txnId: "TXN-2025-004",
		donor: "Ayesha Khatun",
		email: "ayesha@example.com",
		project: "Water Well",
		amount: 15000,
		method: "Rocket",
		status: "Failed",
		date: "26 November 2025",
		icon: "❌",
	},
	{
		id: 5,
		txnId: "TXN-2025-005",
		donor: "David Miller",
		email: "david@example.com",
		project: "Emergency Relief",
		amount: 200,
		method: "Stripe",
		status: "Completed",
		date: "25 November 2025",
		icon: "✅",
	},
	{
		id: 6,
		txnId: "TXN-2025-006",
		donor: "Rahim Uddin",
		email: "rahim@example.com",
		project: "School Building",
		amount: 75000,
		method: "bKash",
		status: "Completed",
		date: "24 November 2025",
		icon: "💳",
	},
	{
		id: 7,
		txnId: "TXN-2025-007",
		donor: "Aisha Khan",
		email: "aisha@example.com",
		project: "Healthcare Clinic",
		amount: 35000,
		method: "Nagad",
		status: "Completed",
		date: "23 November 2025",
		icon: "💚",
	},
	{
		id: 8,
		txnId: "TXN-2025-008",
		donor: "Hassan Ali",
		email: "hassan@example.com",
		project: "Digital Library",
		amount: 12000,
		method: "Rocket",
		status: "Pending",
		date: "22 November 2025",
		icon: "🟠",
	},
];

export default function Donations() {
	const [query, setQuery] = useState("");
	const [project, setProject] = useState("All");
	const [status, setStatus] = useState("All");
	const [page, setPage] = useState(1);
	const perPage = 5;

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return sampleDonations.filter((d) => {
			if (project !== "All" && d.project !== project) return false;
			if (status !== "All" && d.status !== status) return false;
			if (!q) return true;
			return (
				d.donor.toLowerCase().includes(q) ||
				d.email.toLowerCase().includes(q) ||
				d.txnId.toLowerCase().includes(q)
			);
		});
	}, [query, project, status]);

	const total = filtered.length;
	const pageCount = Math.max(1, Math.ceil(total / perPage));
	const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

	const stats = {
		totalDonations: "৳8.4M",
		thisMonth: "৳330K",
		totalDonors: "1,247",
		successRate: "96.8%",
		completedCount: sampleDonations.filter((d) => d.status === "Completed")
			.length,
		pendingCount: sampleDonations.filter((d) => d.status === "Pending").length,
	};

	const [step, setStep] = useState(1);
	const [selectedProject, setSelectedProject] = useState(null);
	const [amount, setAmount] = useState(null);
	const [customAmount, setCustomAmount] = useState("");
	const [currency, setCurrency] = useState("BDT");
	const navigate = useNavigate();

	const projects = [
		{
			id: 1,
			name: "Education Support Program",
			desc: "Providing quality education to underprivileged children in Matlab",
			raised: "325,000",
			goal: "500,000",
			progress: 65,
		},
		{
			id: 2,
			name: "Healthcare Initiative",
			desc: "Building a community health center for rural areas",
			raised: "450,000",
			goal: "800,000",
			progress: 56,
		},
		{
			id: 3,
			name: "Clean Water Project",
			desc: "Installing tube wells and water purification systems",
			raised: "180,000",
			goal: "400,000",
			progress: 45,
		},
		{
			id: 4,
			name: "Women Empowerment",
			desc: "Vocational training and entrepreneurship for women",
			raised: "220,000",
			goal: "350,000",
			progress: 63,
		},
	];

	const quickAmounts = [500, 1000, 2000, 5000, 10000];

	const handleSelectProject = (project) => {
		setSelectedProject(project);
		setStep(2);
	};

	const handleSelectAmount = () => {
		const finalAmount = customAmount || amount;
		if (!finalAmount) {
			alert("Please select or enter an amount");
			return;
		}
		setAmount(finalAmount);
		setStep(3);
	};

	const handleProceedPayment = () => {
		setStep(4);
	};

	const handleBack = () => {
		if (step === 1) navigate("/");
		else setStep(step - 1);
	};

	// Step 1: Select Project
	if (step === 1) {
		return (
			<div className="min-h-screen bg-gray-50 flex flex-col">
				<nav className="bg-white shadow-sm sticky top-0 z-50">
					<div className="container mx-auto px-4 py-3 flex justify-between items-center">
						<div className="font-semibold">Monone Matlab</div>
						<button onClick={() => navigate("/")} className="text-gray-600 hover:text-black">✕</button>
					</div>
				</nav>

				<main className="flex-1 py-12 px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<div className="text-5xl mb-4">❤️</div>
							<h1 className="text-4xl font-bold mb-3">Make a Donation</h1>
							<p className="text-gray-600">
								Your donation helps transform lives in our community. Every contribution makes a difference.
							</p>
						</div>

						{/* Steps indicator */}
						<div className="flex justify-center gap-4 mb-8">
							<button className="px-6 py-2 bg-black text-white rounded-full text-sm">1 Select Project</button>
							<button className="px-6 py-2 bg-gray-300 text-gray-600 rounded-full text-sm">2 Amount</button>
							<button className="px-6 py-2 bg-gray-300 text-gray-600 rounded-full text-sm">3 Details</button>
						</div>

						{/* Projects Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							{projects.map((project) => (
								<div key={project.id} className="bg-white p-6 rounded-lg border hover:shadow-lg transition">
									<h3 className="font-semibold text-lg mb-2">{project.name}</h3>
									<p className="text-sm text-gray-600 mb-4">{project.desc}</p>

									<div className="mb-4">
										<div className="w-full bg-gray-200 h-2 rounded mb-2">
											<div className="bg-black h-2 rounded" style={{ width: `${project.progress}%` }} />
										</div>
										<div className="flex justify-between text-xs text-gray-600">
											<span>{project.progress}% Complete</span>
											<span>Goal: ৳ {project.goal}</span>
										</div>
									</div>

									<div className="mb-4">
										<span className="text-sm text-gray-600">Raised</span>
										<div className="font-semibold">৳ {project.raised}</div>
									</div>

									<button
										onClick={() => handleSelectProject(project)}
										className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800"
									>
										Select Project →
									</button>
								</div>
							))}
						</div>
					</div>
				</main>

				<FooterLanding />
			</div>
		);
	}

	// Step 2: Select Amount
	if (step === 2) {
		return (
			<div className="min-h-screen bg-gray-50 flex flex-col">
				<nav className="bg-white shadow-sm sticky top-0 z-50">
					<div className="container mx-auto px-4 py-3 flex justify-between items-center">
						<div className="font-semibold">Monone Matlab</div>
						<button onClick={() => navigate("/")} className="text-gray-600 hover:text-black">✕</button>
					</div>
				</nav>

				<main className="flex-1 py-12 px-4">
					<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
						<div className="text-center mb-8">
							<h1 className="text-3xl font-bold mb-2">Make a Donation</h1>
							<p className="text-gray-600">
								Your donation helps transform lives in our community. Every contribution makes a difference.
							</p>
						</div>

						{/* Steps indicator */}
						<div className="flex justify-center gap-4 mb-8">
							<button className="px-6 py-2 bg-gray-300 text-gray-600 rounded-full text-sm">✓ Select Project</button>
							<button className="px-6 py-2 bg-black text-white rounded-full text-sm">2 Amount</button>
							<button className="px-6 py-2 bg-gray-300 text-gray-600 rounded-full text-sm">3 Details</button>
						</div>

						<div>
							<h2 className="text-2xl font-bold mb-4 text-center">Choose Your Donation Amount</h2>
							<p className="text-gray-600 text-center mb-6">Every contribution makes a difference</p>

							{/* Currency */}
							<div className="mb-6">
								<label className="block text-sm font-medium mb-3">Currency</label>
								<div className="flex gap-2">
									{["BDT", "USD", "GBP", "EUR"].map((c) => (
										<button
											key={c}
											onClick={() => setCurrency(c)}
											className={`px-4 py-2 rounded ${currency === c ? "bg-black text-white" : "border"}`}
										>
											{c}
										</button>
									))}
								</div>
							</div>

							{/* Quick Select */}
							<div className="mb-6">
								<label className="block text-sm font-medium mb-3">Quick Select</label>
								<div className="grid grid-cols-5 gap-2">
									{quickAmounts.map((amt) => (
										<button
											key={amt}
											onClick={() => {
												setAmount(amt);
												setCustomAmount("");
											}}
											className={`py-2 rounded border ${amount === amt ? "bg-black text-white border-black" : "hover:border-black"}`}
										>
											{currency === "BDT" ? "৳" : currency} {amt}
										</button>
									))}
								</div>
							</div>

							{/* Custom Amount */}
							<div className="mb-6">
								<label className="block text-sm font-medium mb-3">Or Enter Custom Amount</label>
								<div className="flex gap-2">
									<div className="flex-1 relative">
										<span className="absolute left-3 top-2 text-gray-600">{currency === "BDT" ? "৳" : currency}</span>
										<input
											type="number"
											value={customAmount}
											onChange={(e) => {
												setCustomAmount(e.target.value);
												setAmount(null);
											}}
											placeholder="Amount"
											className="w-full pl-8 pr-3 py-2 border rounded"
										/>
									</div>
									<button className="px-4 py-2 bg-gray-800 text-white rounded">✓</button>
								</div>
							</div>

							<div className="flex gap-4">
								<button onClick={() => setStep(1)} className="flex-1 py-2 border rounded hover:bg-gray-50">
									Back
								</button>
								<button
									onClick={handleSelectAmount}
									className="flex-1 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
								>
									Continue →
								</button>
							</div>
						</div>
					</div>
				</main>

				<FooterLanding />
			</div>
		);
	}

	// Step 3: Details
	if (step === 3) {
		return (
			<div className="min-h-screen bg-gray-50 flex flex-col">
				<nav className="bg-white shadow-sm sticky top-0 z-50">
					<div className="container mx-auto px-4 py-3 flex justify-between items-center">
						<div className="font-semibold">Monone Matlab</div>
						<button onClick={() => navigate("/")} className="text-gray-600 hover:text-black">✕</button>
					</div>
				</nav>

				<main className="flex-1 py-12 px-4">
					<div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
						{/* Left: Your Information */}
						<div className="col-span-2 bg-white rounded-lg shadow-sm p-8">
							<div className="flex justify-center gap-4 mb-8">
								<button className="px-6 py-2 bg-gray-300 text-gray-600 rounded-full text-sm">✓ Select Project</button>
								<button className="px-6 py-2 bg-gray-300 text-gray-600 rounded-full text-sm">✓ Amount</button>
								<button className="px-6 py-2 bg-black text-white rounded-full text-sm">3 Details</button>
							</div>

							<h2 className="text-2xl font-bold mb-4">Your Information</h2>
							<p className="text-sm text-gray-600 mb-6">Required for sending donation receipt</p>

							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium mb-2">Full Name</label>
									<input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded" />
								</div>

								<div>
									<label className="block text-sm font-medium mb-2">Email Address</label>
									<input type="email" placeholder="your@email.com" className="w-full px-4 py-2 border rounded" />
								</div>

								<div>
									<label className="block text-sm font-medium mb-2">Phone Number</label>
									<input type="tel" placeholder="+880..." className="w-full px-4 py-2 border rounded" />
								</div>

								<label className="flex items-center gap-3 mt-6">
									<input type="checkbox" className="w-4 h-4" />
									<span className="text-sm">Make donation anonymous</span>
								</label>
								<p className="text-xs text-gray-500">Your name will not be displayed publicly</p>
							</div>

							<div className="flex gap-4 mt-8">
								<button onClick={() => setStep(2)} className="flex-1 py-2 border rounded hover:bg-gray-50">
									Back
								</button>
								<button
									onClick={handleProceedPayment}
									className="flex-1 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
								>
									Proceed to Payment →
								</button>
							</div>

							<button className="w-full mt-4 py-3 border rounded text-gray-600 hover:bg-gray-50">
								💳 Donate via QR Code
							</button>
						</div>

						{/* Right: Donation Summary */}
						<div className="bg-white rounded-lg shadow-sm p-6 h-fit">
							<h3 className="font-semibold text-lg mb-4">Donation Summary</h3>

							<div className="space-y-4 border-b pb-4">
								<div>
									<div className="text-sm text-gray-600">Project</div>
									<div className="font-medium">{selectedProject?.name}</div>
								</div>

								<div>
									<div className="text-sm text-gray-600">Amount</div>
									<div className="text-2xl font-bold">
										{currency === "BDT" ? "৳" : currency} {customAmount || amount}
									</div>
								</div>

								<div>
									<div className="text-sm text-gray-600">Type</div>
									<div className="font-medium">One-Time</div>
								</div>
							</div>
						</div>
					</div>
				</main>

				<FooterLanding />
			</div>
		);
	}

	// Step 4: Payment
	if (step === 4) {
		return (
			<div className="min-h-screen bg-gray-50 flex flex-col">
				<nav className="bg-white shadow-sm sticky top-0 z-50">
					<div className="container mx-auto px-4 py-3 flex justify-between items-center">
						<div className="font-semibold">Monone Matlab</div>
						<button onClick={() => navigate("/")} className="text-gray-600 hover:text-black">✕</button>
					</div>
				</nav>

				<main className="flex-1 py-12 px-4">
					<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
						<div className="text-center mb-8">
							<h1 className="text-3xl font-bold mb-2">Complete Your Donation</h1>
							<p className="text-gray-600">Secure payment powered by SSL Commerz</p>
						</div>

						<div className="bg-gray-50 p-6 rounded-lg mb-8">
							<div className="space-y-3 text-sm">
								<div className="flex justify-between">
									<span className="text-gray-600">Project:</span>
									<span className="font-medium">{selectedProject?.name}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Amount:</span>
									<span className="font-medium text-xl">
										{currency === "BDT" ? "৳" : currency} {customAmount || amount}
									</span>
								</div>
								<div className="border-t pt-3 flex justify-between font-semibold">
									<span>Total:</span>
									<span className="text-2xl">
										{currency === "BDT" ? "৳" : currency} {customAmount || amount}
									</span>
								</div>
							</div>
						</div>

						{/* SSL Commerz Simulation */}
						<div className="border-2 border-dashed border-gray-300 p-6 rounded-lg mb-6 bg-blue-50">
							<p className="text-center text-sm text-gray-700 mb-4">
								🔒 SSL Commerz Payment Gateway (Developer Mode)
							</p>
							<div className="space-y-3">
								<input
									type="text"
									placeholder="Card Number (e.g., 4111111111111111)"
									className="w-full px-4 py-2 border rounded text-sm"
									defaultValue="4111111111111111"
								/>
								<div className="grid grid-cols-2 gap-3">
									<input
										type="text"
										placeholder="MM/YY"
										className="w-full px-4 py-2 border rounded text-sm"
										defaultValue="12/25"
									/>
									<input
										type="text"
										placeholder="CVV"
										className="w-full px-4 py-2 border rounded text-sm"
										defaultValue="123"
									/>
								</div>
							</div>
							<p className="text-xs text-gray-600 mt-3">
								ℹ️ Demo mode: Use test card numbers above (no real charge)
							</p>
						</div>

						<button
							onClick={() => {
								alert("✓ Payment successful! Thank you for your donation of " + (customAmount || amount));
								navigate("/");
							}}
							className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 mb-3"
						>
							💳 Complete Payment
						</button>

						<button onClick={() => setStep(3)} className="w-full py-2 border rounded hover:bg-gray-50">
							Back
						</button>
					</div>
				</main>

				<FooterLanding />
			</div>
		);
	}
}
