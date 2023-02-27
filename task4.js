const billingAmountByState = [
    {
      "state": "SP",
      "value": 67836.43
    },
    {
      "state": "RJ",
      "value": 36678.66
    },
    {
      "state": "MG",
      "value": 29229.88
    },
    {
      "state": "ES",
      "value": 27165.48
    },
    {
      "state": "Outros",
      "value": 19849.53
    }
  ];
  const amount = billingAmountByState.reduce((sumValue, state) => sumValue + state.value, 0);
  
  const percentageByState = [];
  billingAmountByState.forEach(state => {
    const percentage = (state.value/amount)*100;
    percentageByState.push({"state":state.state,"percentage":percentage.toFixed(2) + '%'})
  })
  
  console.log(percentageByState);