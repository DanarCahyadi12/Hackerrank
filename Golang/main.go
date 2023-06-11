package main

import (
	"fmt"
	"math"
	"sort"
	"strconv"
	"strings"
)

func bonAppetit(bill []int32, k int32, b int32) {
	// Write your code here
	var cost int32 = 0
	for i, n := range bill {
		i := int32(i)
		if i != k {
			cost += n
		}
	}
	if (cost / 2) == b {
		fmt.Print("Bon Appetit")

	} else {
		fmt.Print(b - (cost / 2))
	}

}
func sockMerchant(n int32, ar []int32) int32 {

	socks := ar
	var pairs int32 = 0
	var i int32
	sort.Slice(socks, func(i, j int) bool { return socks[i] < socks[j] })

	for i < n-1 {
		if socks[i] == socks[i+1] {
			pairs++
			i += 2
		} else {
			i++
		}
	}
	return pairs
	// return 10

}
func birthday(s []int32, d int32, m int32) int32 {
	// Write your code here
	var barDivide int32
	var ranges int32 = 0
	var i int32 = 0
	if int32(len(s)) > 1 {
		for i = 0; i < int32(len(s))-1; i++ {
			if s[i]+s[i+1] == d || s[i]+s[i+1] == m {
				if ranges == m {
					break
				}
				ranges++
				barDivide++
			}
		}
	} else {
		for i = 0; i < int32(len(s)); i++ {
			if s[i] == d && ranges <= m {
				if ranges == m {
					break
				}
				ranges++
				barDivide++
			}
		}
	}

	return barDivide

}

// func migratoryBirds(arr []int32) int32 {
// 	// Write your code here
// 	lengthType := []int32{0, 0, 0, 0, 0}
// 	typeBirds := []int32{1, 2, 3, 4, 5}
// 	var i int32
// 	var j int32
// 	for i = 0; i < int32(len(typeBirds)); i++ {
// 		for j = 0; j < int32(len(arr)); j++ {
// 			if typeBirds[i] == arr[j] {
// 				lengthType[i]++
// 			}
// 		}
// 	}
// 	highest := lengthType[0]
// 	var ind int32
// 	for i, v := range lengthType {
// 		var j int32 = int32(i)
// 		if v > highest {
// 			highest = lengthType[i]
// 			ind = j
// 		}
// 	}
// 	return ind + 1

// }

func getMoneySpent(keyboards []int32, drives []int32, b int32) int32 {
	var cost []int32
	/*
	 * Write your code here.
	 */
	var i int32
	var k int32
	for i = 0; i < int32(len(keyboards)); i++ {
		for k = 0; k < int32(len(drives)); k++ {
			sum := keyboards[i] + drives[k]
			if sum <= b {
				cost = append(cost, sum)
			}
		}
	}
	if int32(len(cost)) > 0 {
		max := cost[0]
		for _, v := range cost {
			if v > max {
				max = v
			}
		}
		if max <= b {
			return max
		} else {
			return -1
		}
	} else {
		return -1
	}

}

func pageCount(n int32, p int32) int32 {
	// Write your code here
	var book [][]int32
	var listV []int32
	var i, k int32
	var count int32
	for i = 0; i < n; i++ {
		if i == 0 {
			book = append(book, []int32{i + 1})
		} else {
			book = append(book, []int32{i + 1, i + 2})
			i++

		}
	}
	for i = 0; i < int32(len(book)); i++ {
		for k = 0; k < int32(len(book[i])); k++ {
			if book[i][k] == p {
				count = i
				break
			}
		}
	}
	listV = append(listV, count)
	count = 0
	var x int32
	for i = 0; i < int32(len(book)); i++ {
		for k = 0; k < int32(len(book[i])); k++ {
			if book[i][k] == n {
				x = i
				break
			}
		}
	}
	for i = x; i > 0; i-- {
		if book[i][1] == p || book[i][0] == p {
			break
		} else {

			count++
		}
	}

	listV = append(listV, count)
	min := listV[0]
	for _, v := range listV {
		if min >= v {
			min = v
		}
	}
	return min
}

// func alternate(s string) int32 {
// 	// Write your code here
// 	splited := strings.Split(s, "")
// 	char1 := ""
// 	char2 := ""

// 	// var lisrChar []string
// 	char1 = splited[0]
// 	char2 = splited[1]
// 	for i := 2; i < len(splited)-1; i++ {
// 		if splited[i] == char1 && splited[i+1] == char2 {
// 			return
// 		}
// 	}

// }
func circularArrayRotation(a []int32, k int32, queries []int32) []int32 {
	// Write your code here
	arr := a
	var i int32
	var m int32
	var result []int32
	for i = 1; i <= k; i++ {
		m = arr[int32(len(arr))-1]
		arr = append(arr[:len(arr)-1], arr[len(arr):]...)
		arr = append([]int32{m}, arr...)
	}

	for _, v := range queries {
		result = append(result, arr[v])
	}

	return result
}

func beautifulDays(i int32, j int32, k int32) int32 {
	// Write your code here
	var n int32
	var count int32
	var reversed string
	for n = i; n <= j; n++ {
		strNum := strconv.Itoa(int(n))
		arrStr := strings.Split(strNum, "")
		for k := len(arrStr) - 1; k >= 0; k-- {
			reversed += arrStr[k]
		}
		convs, _ := strconv.Atoi(reversed)
		r := float64(convs)
		j := float64(n)
		k := int(k)
		decs := math.Abs(j - r)
		intDecs := int32(decs)
		if int(intDecs)%k == 0 {
			count++
		}

		reversed = ""

	}
	return count

}
func repeatedString(s string, n int64) int64 {
	// Write your code here
	var count int64
	splited := strings.Split(s, "")
	var i int64
	for i = 0; i < n-int64(len(s)); i++ {
		splited = append(splited, splited[i])
	}
	for i = 0; i < int64(len(splited)); i++ {
		if splited[i] == "a" {
			count++
		}
	}
	return count

}
func utopianTree(n int32) int32 {
	// Write your code here
	var i int32 = 0
	var h int32
	for i <= n {

		if i%2 == 0 {
			h += 1
		} else {
			h *= 2
		}
		i++
	}
	return h

}

func kaprekarNumbers(p int32, q int32) {
	// Write your code here
	// var isKaprekar string
	for p <= q {

		p++
	}
	// if len(isKaprekar) == 0 {
	// 	fmt.Println("INVALID RANGE")
	// }

}

func main() {
	kaprekarNumbers(1, 100)
	// Write your code here
	// fmt.Println(repeatedString("a", 1000000000))
	// var i int64 = 1000000000
	// var j int64 = 1
	// for j <= i {
	// 	fmt.Print(i)
	// 	i++
	// }
	// // fmt.Println(beautifulDays(1, 2000000, 1000000000))
	// circularArrayRotation([]int32{3, 4, 5}, 2, []int32{1, 2})
	// fmt.Print(alternate("babab"))
	// fmt.Print(pageCount(5, 4))
	// key := []int32{40, 50, 60}
	// drive := []int32{5, 8, 12}

	// fmt.Print(getMoneySpent(key, drive, 60))
	// birds := []int32{1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4}
	// migratoryBirds(birds)
	// arr := []int32{10, 20, 20, 10, 10, 30, 50, 10}
	// res := sockMerchant(int32(len(arr)), arr)
	// fmt.Print(res)

	// arr := []int32{3, 10, 2, 9}
	// bonAppetit(arr, 1, 12)
	// var d int32
	// var m int32
	// arr := []int32{2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1}
	// d = 18
	// m = 7
	// res := birthday(arr, d, m)
	// fmt.Print(res)
}
