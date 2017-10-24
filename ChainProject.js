var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
   //Method called to generate the Ficonacci hash id
    var nextHashNumber = mine(1);

    //the list of blocks during the program
    var myBlocks = new Block();

    //Variable to validate if the fibonacci order is being followed after a insertion.
    var valid = true;

    //Final balance
    var balance = 0;

    myBlocks.dictTransactions = [];
    myBlocks.dictTransactions.push(1:12);

    valid = checkFibonacci(myBlocks);

    //Checking to see if in the correct order
    if (valid)
    {
        nextHashNumber = mine(2);

        myBlocks.AddNextBlock(var Dictionary = {1:1}, nextHashNumber);

        valid = CheckFibonacci(myBlocks);

        //Checking to see if in the correct order
        if (valid)
        {
            nextHashNumber = mine(3);

            myBlocks.AddNextBlock(var Dictionary = {1:-11}, nextHashNumber);

            valid = checkFibonacci(myBlocks);

            //Checking to see if in the correct order
            if (valid)
            {
                nextHashNumber = mine(4);

                myBlocks.AddNextBlock(var Dictionary = {1:6}, nextHashNumber);

                valid = checkFibonacci(myBlocks);

                //Checking to see if in the correct order
                if (valid)
                {
                    balance = getBalance(myBlocks);
                }                       
            }            
        }    

     	Console.log("Balance: " + balance);

        printList(myBlocks);             
    }

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

function Block (proposedHash) {
    this.id = proposedHash;
    this.dictTransactions = [];
    this.preview = null;
    this.next = null;
    
    this.addNextBlock = function addNextBlock(dictTransactions, proposedHash) {
    	var currentNode = this;

    	 while (currentNode.next != null)
        {
            currentNode = currentNode.next;
        }  

        //currentNode is the last one in the sequence.
        if (currentNode == null || proposedHash == 0)
                return;

     	var myBlock = new Block(proposedHash);
        myBlock.Preview = currentNode;

		for (var i=0; i <= dictTransactions.Count; i++) {
			myBlock.dictTransactions.push(dictTransactions[data]);
		}

		if (currentNode.next != null)
            currentNode.next.preview = myBlock;

        myBlock.next = currentNode.next;
        currentNode.next = myBlock;
    };
}

//Method to get the value of Fibonacci next position
function mine(nextPosition){
	if (nextPosition == 0)
    	return 0;
	if (nextPosition == 1)
        return 1;

    return mine(nextPosition - 1) + mine(nextPosition - 2);
}

 //Fibonacci Iterative for checking
//Performance of O(n)
function generateFibonacciCheck(quantity)
{
    var a = 1;
    var b = 1;
    var c = 0;

    var stringBuilder = require('stringbuilder');
    var builder = new StringBuilder({newline: '\r\n'});

    if (quantity == 1)
        return "1";

    builder.Append(a);
    builder.Append(b);

    for (var i = 2; i < quantity; i++)
    {
        c = a + b;
        builder.Append(c);
        a = b;
        b = c;
    }

    return builder.ToString();     
}


//Performance of O(n2)
//Method to calcualte the balance of the transactions
function getBalance(block)
{
    if (block == null)
        return 0;

    var balance = 0;

    while (block != null)
    {
        for (var i = 0; i < block.DictTransactions.Count; i++)
        {
            var dict = block.DictTransactions[i];

            balance += dict.Value;
        }

        block = block.next;
    }

    return balance;
}

//Performance of O(n)
//Method to list the nodes of the blocks
function printList(block)
{
    if (block == null)
        Console.WriteLine("No blocks in this list.");

    while (block != null)
    {
        Console.log(block.id + ", ");
        block = block.next;
    }
}


//Performance of O(n)
//Method to check Fibonacci
checkFibonacci(Block block)
{
 	var stringBuilder = require('stringbuilder');
    var builder = new StringBuilder({newline: '\r\n'});

    while (block != null)
    {
        builder.Append(block.id);
        block = block.next;
    }

    var quantityBlocks = builder.Length;

    var fibonacciSequence = GenerateFibonacciCheck(quantityBlocks);

    for (var i = 0; i < builder.Length; i++)
    {
        if (builder != fibonacciSequence)
            return false;
    }

    return true;
} 