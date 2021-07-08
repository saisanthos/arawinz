import React from 'react';
import '@fontsource/roboto'
import { Typography, Container, Grid} from '@material-ui/core';
const App = () => {
  
    return(
      <div>
        

         
            <Container fixed>
                 
                 <Grid container direction="column" justifyContent="center" alignItems="left">
<Grid item xs={12}>
<Typography variant="h2"  align="center" style={{textDecorationLine:'underline',color:"orange"}}  gutterBottom>
                             Terms &  conditions:
                             
                        </Typography>
                      
                
</Grid>
                     
                
                      
                

     <Grid item xs={12}>
     <Typography variant="h4" align="left"  style={{textDecorationLine:'underline',color:"orange" }} >
                              Our Company Terms & Conditions:
                             
                          </Typography>
         </Grid>        
                     
                         
                
               
            <Grid item xs={12}>
            <Typography variant="subtitle1"  align="left"style={{color:"white" }}>
                      <ol>
                          <li>Please enter only relevant details.</li>
                          <li>Registration with insufficient details would be rejected.</li>
                          <li>The Details about You / Your product should contain true and correct information only. Once the registration process is approved by our panel, the details furnished by you would be available on our portal and mobile applications.</li>
                          <li>All the Vendors (Except Engineers and Workforce) can add up to three Photographs of their products along with contact details, area and city.</li>
                          <li>The Engineers and workforce can add only their subcategory, valid contact details, qualification / training related details, CV, area and City.</li>
                          <li>After Registration as Material & Machinery suppliers, Testing laboratories, Consultants or Contractors can add their product / service by clicking the "Add Product / Service" tab in their Dashboard and finally they need to choose a Subscription plan in the "My Subscription" tab of their Dashboard for their desired customers to contact them.</li>
                          <li>For the Workforce and Engineers the registration procedure is free. The contacts for the workforce and engineers will be immediately available after adding or updating their details.</li>
                          <li>Every time a material or machinery supplier or testing laboratory or consultant or contractor or engineer or workforce add / update their product / profile, their product/ profile will be validated and approved / rejected by the backend team. So, Ensure that relevant information alone is provided in the respective fields.</li>
                          <li>Please follow the latest Codes, standards and Govt. Rules in the relevant fields.</li>
                        </ol>
                  </Typography>
            </Grid>

                
                


               <Grid item xs={12}>
               <Typography variant="h4"  align="left"  style={{textDecorationLine:'underline', color:"orange"}} >
                             Cancellation & Refund Policy:
                             
                        </Typography>
               </Grid>

                    
                         <Grid item xs={12}>
                         <Typography variant='subtitle1' align='left'style={{color:"white" }} paragraph>
                        <ol>
                             <li>Once registration is accepted, your contact details will be displayed for the stipulated period under your chosen subscription plan. </li>
                             <li>No refunds once you have subscribed to a plan.</li>
                         </ol>
                    </Typography>
                         </Grid>
              
                     
                <Grid item xs={12}>
                    
                <Typography variant="h4"  align="left"  style={{textDecorationLine:'underline',color:"orange"}} >
                            Disclaimer:
                           
                        </Typography>
                </Grid>
               
                
              
                    <Grid item xs ={12}>
                    <Typography variant='subtitle1' align='left' style={{color:"white" }} paragraph>
                        <ol>
                            <li>ESAY gives no guarantee to the users of the portal that registration would result in conclusion of a business offer. The information provided in the portal would be made available to the cross section of Construction industry.</li>
                             <li>The inclusion of contact not necessarily imply a recommendation.</li>
                             <li>Considerable efforts and care is taken to incorporate the useful information to the Engineers and people in the construction sector. In case of any errors, discrepancies or omissions in the information provided, the ESAY shall not be liable. The users are requested to relay on professional advice / expertise.
</li>
                         </ol>
                    </Typography>
                    </Grid>
                

                
                  
              
          </Grid>
                
          </Container>
      </div>
      
    );
    }
           

export default App;