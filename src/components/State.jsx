

const State = () => {


    const [string1, setString1] = useState("TN 01")

    const [string2, setString2] = useState("TN 25")

    const [string3, setString3] = useState("TN 23")

    const [string4, setString4] = useState("TN 64")

    const [string5, setString5] = useState("TN 24")

    const statestring = () => {

        setString1("CHENNAI")
        setString2("TIRUVANNAMALAI")
        setString3("VELLORE")
        setString4("MADURAI")
        setString5("KRISHNAGIRI")


    }

    const [number6, setNumber6] = useState(0)

    const [number7, setNumber7] = useState(2)

    const [number8, setNumber8] = useState(4)

    const [number9, setNumber9] = useState(6)

    const [number10, setNumber10] = useState(8)

    const statenumber = () => {

        setNumber6(number6 + 2)
        setNumber7(number7 + 2)
        setNumber8(number8 + 2)
        setNumber9(number9 + 2)
        setNumber10(number10 + 2)



    }



    const [array11, setArray11] = useState([1, 2, 3, 4])

    const [array12, setArray12] = useState([2, 4, 5, 6])


    const [array13, setArray13] = useState([3, 4, 5, 6])


    const [array14, setArray14] = useState([4, 5, , 6, 7])

    const [array15, setArray15] = useState([5, 6, 7, 9])

    const statearray = () => {

        setArray11(array11 + [5, 6, 7])

        setArray12(array12 + [6, 9, 3])

        setArray13(array13 + [5, 6, 5])

        setArray14(array14 + [8, 8, 7])

        setArray15(array15 + [6, 6, 0])


    }

    const [null16, setNull16] = useState(null)

    const statenull = () => {


        setNull16(true)
    }






    return (

        <>

            <div className="parent">


                <h2>TASK 4</h2><br />
                <div >
                    <h2> REACT HOOK CONCEPTS </h2>
                </div>

                <div className="string">
                    <div style={{ marginTop: "15px" }} className="child1">
                        <h2>String </h2>

                    </div>
                    <div className="child2">
                        <h3>District ➠ {string1}</h3><br />

                        <h3>District ➠{string2}</h3><br />

                        <h3>District ➠ {string3}</h3><br />

                        <h3>District ➠ {string4}</h3><br />

                        <h3>District ➠ {string5}</h3><br />
                    </div>

                    <button style={{ width: "80px", height: "25px", alignItems: "center", marginTop: "10px", backgroundColor: "blue", color: "white", borderRadius: "8px" }} onClick={statestring}>click Here</button>

                </div>

                <div className="number">
                    <div style={{ marginTop: "15px" }}>

                        <h2>Number</h2>
                    </div>

                    <div>
                        <h3>Enter the number ➜{number6} </h3><br />
                        <h3>Enter the number ➜{number7} </h3><br />
                        <h3>Enter the number ➜{number8} </h3><br />
                        <h3>Enter the number ➜{number9} </h3><br />
                        <h3>Enter the number ➜{number10} </h3><br />
                    </div>

                    <button style={{ width: "80px", height: "25px", alignItems: "center", marginTop: "10px", backgroundColor: "blue", color: "white", borderRadius: "8px" }} onClick={statenumber}>click me</button>


                </div>

                <div className="array">
                    <div style={{ marginTop: "15px" }}>

                        <h2>Array</h2>
                    </div>

                    <div>
                        <h3>Array datas ➜{array11} </h3><br />
                        <h3>Array datas ➜{array12} </h3><br />
                        <h3>Array datas ➜{array13} </h3><br />
                        <h3>Array datas ➜{array14} </h3><br />
                        <h3>Array datas ➜{array15} </h3><br />
                    </div>

                    <button style={{ width: "80px", height: "25px", alignItems: "center", marginTop: "10px", backgroundColor: "blue", color: "white", borderRadius: "8px" }} onClick={statearray}>click me</button>

                </div>


<div className="null">
                <div style={{ marginTop: "15px" }}>

                    <h2>null</h2>
                </div>


                <div>
                    <h2>Value: {String(null16)}</h2>

                </div>

                <button style={{ width: "80px", height: "25px", alignItems: "center", marginTop: "10px", backgroundColor: "blue", color: "white", borderRadius: "8px" }} onClick={statenull}>click me</button>

</div>

            </div>




        </>


    )

}

export default State;



