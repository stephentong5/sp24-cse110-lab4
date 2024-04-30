1. 20
2. 20
3. 20
4. It errors because it cannot access the result variable since it is of the let type and it isn't in the same block as that variable.
5. It errors because the code attempts to reasign the result variable which isn't allowed with the const type.
6. It errors for the above reason, however, even if it didn't error for the reason above it would error again because it attempts to access the result variable outside of it's block which you can't do with the const type.
