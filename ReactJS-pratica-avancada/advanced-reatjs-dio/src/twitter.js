import React, { useEffect, useState, memo } from 'react'


const areEqual = (prevProps, nextProps) => {
    //return true
    return prevProps.loading === nextProps.loading
}//retornando true nao atualiza o ciclo de vida

function Twitter(props) {
    const { loading } = props
    const [tweet, setTweet] = useState('tittle')

//componentDidMount
useEffect(() => {
  const {posts, loading} = props
  console.log('componentDidMount', posts)
  console.log('componentDidMount:loading', loading)
},[])

//componentDidUpdate
useEffect(() =>{
    console.log('componentDidUpdate',loading)
},[loading]) //passa o loading dentro de []indica que toda vez que ele for
//alterado o component irá atualizar

//componentWillUnmont
useEffect(() => {
    return() =>{
        console.log('componentWillUnmount : Fui removido')
    }
})

const handleTweet = () => {
    setTweet('tweet atualizado')
}
console.log('tweet atualizado', tweet)
return (
    <div>
        <button onClick={handleTweet}>Re-render</button>
    </div>
)

//const {posts} = props;
}

export default memo(Twitter, areEqual())