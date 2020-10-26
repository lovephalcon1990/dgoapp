package tools

import (
	"sort"
)

func MergeMap(dayslice []int, map1, map2 map[int]map[string]interface{}) map[int]interface{} {
	retMap := make(map[int]interface{})
	for _, v := range dayslice {
		merMap := make(map[string]interface{})
		merMap["day"] = v
		if varMap, ok := map1[v]; ok {
			for kf, vf := range varMap {
				merMap[kf] = vf
			}
		}
		if varMap2, ok := map2[v]; ok {
			for kf, vf := range varMap2 {
				merMap[kf] = vf
			}
		}
		retMap[v] = merMap
	}
	return retMap
}

func SortByKey(sortdata map[int]interface{}) []interface{} {
	var keys []int

	for k := range sortdata {
		keys = append(keys, k)
	}
	sort.Sort(sort.Reverse(sort.IntSlice(keys)))

	newdata := make([]interface{}, len(keys))
	for i, k1 := range keys {
		newdata[i] = sortdata[k1]
	}
	return newdata
}
