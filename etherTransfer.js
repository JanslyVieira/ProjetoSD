const contratoABI = [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "transferEther",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    }
  ];// ABI do seu contrato
const contratoEndereco = '0x213D570D4caeB230E5f241fb6aC3346AA009bB46';


async function enviarEther() {
 
     const recipientAddress = document.getElementById('recipientAddress').value;
     const amount = document.getElementById('amount').value;
   
     const web3 = new Web3('HTTP://127.0.0.1:7545');
     const contrato = new web3.eth.Contract(contratoABI, contratoEndereco);
     
     try{
       
        const contas = await web3.eth.getAccounts();
        const valorWei = web3.utils.toWei(amount, 'ether');
         
        contrato.methods.transferEther(recipientAddress).send({ from: contas[0], value: valorWei })
        .then(recibo => {
             alert(`Transação bem-sucedida! Hash: ${recibo.transactionHash}`);
        })
        .catch(err => {
            console.error(err);
            alert('Ocorreu um erro ao enviar a transação.');
         });
    } catch (error) {
        console.error(error);
        alert('Falha ao enviar Ether. Verifique os logs para mais detalhes.');
    }
}
