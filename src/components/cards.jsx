import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function SimpleCard() {
    return (
        <Card className="mt-6 w-96 border-4 border-green-300">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Este es una Tarjeta
                </Typography>
                <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center mt-4">
                <Button>Leer más</Button>
            </CardFooter>
        </Card>
    );
  }