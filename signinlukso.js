// function login() {
//   // You would implement Lukso Universal Profile integration here
//   // For the hackathon, simulate a successful login
//   alert("Login successful!");
//   // Hide the login container and show the concept container
//   document.getElementById("loginContainer").style.display = "none";
//   document.getElementById("conceptContainer").style.display = "block";
// }
const provider = new ethers.BrowserProvider(window.lukso, "any")

const signer = await provider.getSigner()
const contract = new ethers.contract(address, abi, signer);
setContract(contract)

