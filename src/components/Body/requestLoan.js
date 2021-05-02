const mockServerUrl = 'http://localhost:9000/request-loan/';

const requestLoan = async (amount) => {
    try {
        const requestLoanRes = await fetch(mockServerUrl + amount);
        const requestLoanResAsJson = await requestLoanRes.json();
        return requestLoanResAsJson;
    } catch (e) {
        return new Promise((res) => {
            res({isLoanApproved: false});
        });
    }
};

export default requestLoan;