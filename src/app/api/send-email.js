const sendMessage = async () => {
    if (!vehicleNumber.trim()) {
      alert("Please enter a vehicle number.");
      return;
    }
  
    const response = await fetch("/api/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "+1234567890",  // 🔹 Replace with the recipient's phone number
        message: `Vehicle ${vehicleNumber} has been registered successfully!`
      }),
    });
  
    const data = await response.json();
  
    if (data.success) {
      setMessageSent(true);
      alert("SMS sent successfully!");
    } else {
      alert("Failed to send SMS: " + data.message);
    }
  };
  