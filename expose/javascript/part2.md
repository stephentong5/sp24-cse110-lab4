1. 3 will be printed because the prices variable is of length 3. This means i will increase in the for loop until it is equal length of the prices array in which case it will exit the for loop and continue to line 12.
2. 150 will be printed because the discountedPrice variable keeps being reassigned in the for loop, so it's value when it's printed will be determined by the last loop. This means that it will take the last element of the price array and multiply it by 0.5 (1 - 0.5 = 0.5). This is 300 * 0.5 which is 150.
3. 
