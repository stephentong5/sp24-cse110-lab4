1. 3 will be printed because the prices variable is of length 3. This means i will increase in the for loop until it is equal length of the prices array in which case it will exit the for loop and continue to line 12.
2. 150 will be printed because the discountedPrice variable keeps being reassigned in the for loop, so it's value when it's printed will be determined by the last loop. This means that it will take the last element of the price array and multiply it by 0.5 (1 - 0.5 = 0.5). This is 300 * 0.5 which is 150.
3. 150 will be printed for similar reasons as number 2. finalPrice is also reassigned in the for loop, so only the last loop matters. Since we know that discountedPrice will equal 150 in the last loop we can use this to find finalPrice. The finalPrice is 150 * 100 / 100 and then that rounded. This will just stay as 150 so that is what is printed.
4. It will return the discounted array which will look like this: [50, 100, 150]. This is because the discount is 0.5 and it will ultimately be the prices array multiplied by 1 - 0.5 which is 0.5. This means that it is half of the prices array which is the answer I gave above.
5. This code will error because it cannot access the i variable since it is not in the same block as it.
6. This code will also error for the same reasons as above. dicountedPrice is not defined in the same block as the print statement so it can't find it because of the let variable type.
7. This prints 150 for the same reasons as number 3. The reason this doesn't error is because finalPrice doesn't have a variable type and it uses all the other variables that have let inside that block. This results in the same asnwer as number 3 because the code executes virtually the same way.
8. This will return the same answer as number 4 which is [50, 100, 150]. This also doesn't error because it uses finalPrice and since we know finalPrice doesn't cause any errors, then this won't either. This again results in the same answer as number 4 because it's basically the same piece of code.
9. This code errors for the same reasons as number 5. The i variable cannot be accessed since it has the let variable type and the print statement is outside the block where i is defined.
10. 3 is printed. This is because length is defined in the same block as the print statement and it is the length of the prices array which we can see to be 3. Nothing in the for loop attempts to change length so no errors would occur.
11. Again this would return [50, 100, 150] for the similar reasons as number 4 and 8. discounted pushes disocuntedPrice inside the block that discountedPrice is defined so no errors would occur. For each loop the discountedPrice will be half of the value of the price array as I have explained above. This means that the discounted array is essentially the price array split in half.
12. A. student.name <br/>
    B. student['Grad Year'] <br/>
    C. student.greeting() <br/>
    D. student.greeting.name <br/>
    E. student.courseLoad[0] <br/>
13. A. '32' because integers map to their exact string representation. <br/>
    B. 1 because there is no - for strings so the 3 is converted to an integer. <br/>
    C. 3 because null = 0 as an integer. <br/>
    D. '3null' because null is mapped to a string so it is concatenated. <br/>
    E. 4 because true is 1 as an integer. <br/>
    F. 0 because false and null both equal 0 as an integer. <br/>
    G. '3undefined' because undefined becomes a string and then is concatenated with 3. <br/>
    H. NaN because undefined is the same as NaN as an integer, so it can't calculate to anything so it returns NaN. <br/>
14. A. true because '2' becomes an integer and then it is just 2 > 1. <br/>
    B. false because it compares it lexographically letter by letter and '2' comes after '1' so '2' is greater than '1'. <br/>
    C. true because the '2' is converted into 2 so they are equal. <br/>
    D. false because 2 and '2' are not the same type and for the === that has to be true. <br/>
    E. false because true equals 1 as an integer and 1 != 2. <br/>
    F. true because if you put any integer other than 0 into Boolean() then it becomes true and true === true because they are the same type and same value. <br/>
15. === is a strict equality operator so type conversion will not occur. == will use type conversion if two values are different types. For example '1' == 1 is true, but '1' === 1 is false. This is because in the first case '1' is converted to 1 because of the == operator and 1 and 1 are equal. In the second case '1' is not converted and '1' as a sring is the not the same as 1 as an integer so false is returned.
16. In part2-question16.js
