class DS(list):
    push = list.append
    def is_empty(self):
        if not self:
            return True
        else:
            return False
    def peek(self):
        return self[-1]
    
if __name__=="__main__":
    dt = DS()
    for i in range(1, 5):
        dt.push(i)
    while dt:
        data = dt.pop()
        print(data, end=' ')