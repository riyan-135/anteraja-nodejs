import axios from 'axios'

export const serviceRatesAnterAja = async (req, res, next) => {
  try {
      const xApiKey = req.get("x-api-key")
      const reqHeaders = {
        name: req.headers.name,
        connection_name: req.headers.connection_name,
        base_path: req.headers.base_path,
        access_key: req.headers.access_key,
      }
      const reqBody = req.body
      const headersBody = {...reqHeaders, ...reqBody}

      if (!xApiKey) return res.status(401).send("bad request please refer to doc.appgregator.co");

      const data=[];
      data.push({"name" : req.get('name') , "connection_name" : req.get('connection_name') , "integration" : "antaraja" })
      
      const params = {  
        origin: reqBody.origin,
        destination: reqBody.destination,
        weight: reqBody.weight
      }
      const basePath = `${reqHeaders.base_path}/serviceRates`
      const result = await axios.post(basePath, JSON.stringify(params), {
        headers: {
          "Content-Type": 'application/json',
          "access-key-id": reqHeaders.access_key, 
          "secret-access-key": "SYRzSiaro+a9U0wa5munOw=="
        }
      })
      return res.status(200).send(result.data)
  } catch (error) {
      console.log(error.message, 'error')
      return res.status(400).send(error.message)
  }
}