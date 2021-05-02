const mockServerUrl = 'http://localhost:9000/request-loan/';

const requestLoan = async (amount) => {
    const requestLoanRes = await fetch(mockServerUrl + amount);
    const requestLoanResAsJson = await requestLoanRes.json();
    return requestLoanResAsJson;
};

export default requestLoan;