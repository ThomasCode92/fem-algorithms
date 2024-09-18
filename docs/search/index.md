# Search - Linear & Binary

## Linear Search

![linear search](./images/linear-search.excalidraw.png)

## Binary Search

It is a bit doozy, but its definitely a basis for other algorithms!<br /> Important question about the dataset: is it ordered? If yes, you will have great advantages!

![binary search](./images/binary-search.excalidraw.png)

**Pseudo Code**

```javascript
search(arr, lo, hi, n);

do
    m = floor(lo + (hi - lo) / 2);
    v = arr[m]
    if v = n return true
    else if v > m
        lo = m+1
    else
        hi = m
while lo < hi
return false
```
