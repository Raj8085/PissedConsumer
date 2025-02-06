
const StatusBar = () => {
  const ip = "152.58.24.71"; // Replace with dynamic IP fetching if needed
  const isp = "Jio"; // Replace with dynamic ISP fetching if needed
  const status = "Unprotected"; // Replace with dynamic status fetching if needed

  return (
    <div className="bg-gray-900 text-white text-sm py-2">
      <div className="container mx-auto flex justify-center items-center text-center px-4">
        <p className="truncate">
          <span>Your IP: {ip}</span> · <span>Your ISP: {isp}</span> ·{" "}
          <span>
            Your Status:{" "}
            <span className="text-red-500 font-bold">{status}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default StatusBar;
