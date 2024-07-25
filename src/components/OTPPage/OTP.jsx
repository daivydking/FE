import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PhHeartbeat from '../../assets/ph_heartbeat-duotone.png';
import { useNavigate } from 'react-router-dom';  // import useNavigate from react-router-dom

const SignUpOTP = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();  // create a navigate function

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input box
        if (element.value !== "" && element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "") {
            if (e.target.previousSibling) {
                e.target.previousSibling.focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const otpValue = otp.join("");

        // Check if OTP is fully entered
        if (otpValue.length !== 6) {
            setLoading(false);
            setError("Please enter a 6-digit OTP.");
            return;
        }

        // Simulate a successful OTP submission
        setTimeout(() => {
            setLoading(false);
            if (otpValue === "123456") { // Example OTP value for testing
                navigate('/Login');  // redirect to login page
            } else {
                setError("Invalid OTP!");
            }
        }, 1000); // Simulate network delay
    };

    return (
        <div className="bg-gray-50 flex flex-col justify-center items-center py-20 px-4 sm:px-12 lg:px-16 min-h-screen min-w-screen">
            <div className="w-full max-w-[1296px] h-[550px] mt-[3rem] mx-auto flex flex-col justify-center items-center rounded-tl-[24px] rounded-tr-none rounded-bl-none shadow-lg overflow-hidden bg-white p-8">
                <div className="flex w-full justify-center mb-8 mt-[-10rem] gap-1">
                    <img src={PhHeartbeat} alt="E-MEDATT Logo" className="w-[35px] h-[35px] font-inter"/>
                    <h1 className='font-inter text-4xl font-bold leading-8 text-[#3b54fa] ml-2'>E-MEDATT</h1>
                </div>
                <h2 className="text-[20px] font-inter font-semibold leading-9 text-center text-[#222222] mt-19">Check your email</h2>
                <p className="mt-3 font-normal font-inter text-lg leading-6 text-center text-[#222222]"> We sent an OTP to your mail</p>

                <form className="mt-[5rem] w-full space-y-4" onSubmit={handleSubmit}>
                    <div className="flex justify-center space-x-2 mt-3">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                name="otp"
                                maxLength="1"
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="mt-1 block w-10 px-3 py-2 border border-[#F44949] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-center text-lg"
                                onFocus={(e) => e.target.select()}
                            />
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="mt-4 text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <footer className="w-[1200px] h-[19px] gap-[384px] lg:flex justify-center items-center text-center text-gray-500 mt-10">
                <div className='w-[159px] h-[19px]'>
                    <p className='font-Inter text-[#141522] text-xs leading-[14.52px] tracking-[-1%] text-nowrap'>Copyright © Emedatt 2024</p>
                </div>

                <div className="flex item-center w-[155px] h-[19px] gap-[18px]">
                    <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://facebook.com/example" target="_blank " rel='noopener noreferrer'> <FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faFacebook} /></a>
                    <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://twitter.com" target="_blank " rel='noopener noreferrer'> <FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faTwitter} /></a>
                    <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://instagram.com" target="_blank " rel='noopener noreferrer'><FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faInstagram} /></a>
                    <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://youtube.com" target="_blank " rel='noopener noreferrer'><FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faYoutube} /></a>
                    <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://linkedin.com" target="_blank " rel='noopener noreferrer'><FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faLinkedin} /></a>
                </div>
                <div className='w-[117px] h-[11px]'>
                    <p className="tracking-[-1%] text-[#263238] font-normal text-[12px] leading-[14.52px]">Terms and condition</p>
                </div>
            </footer>
        </div>
    );
};

export default SignUpOTP;
