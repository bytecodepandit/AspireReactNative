## Mobile Code Challenge

### Description - 
Debit card Module design and functionality implementation
 
### Technology used-
 
React Native - 0.67.2
React - 17.0.2
Node - v17.4.0
Xcode -13.2.1
 
### Project Structure-

###### -app
   ###### -App.tsx(entry points)
   ###### -assets (Include fonts, image and svg files)
   ###### -components (include react component)
   ###### -core
           -enum
           -interfaces
           -mock
           -services(including http and navigation)
           -utils
  ###### -modules(include container or screens)
  ###### -redux(includes action types, store initialisation, reducers, actions and     saga)
   ###### -routes(include navigation tab and stacks)
   ###### -shared-import(include import cost related imports)
   ###### -theme(include colour, theme and typography )
 
### Fonts used - 
 Proxima Nova
 
### Networking - 
 Local http-server with port 8080


 #### steps to run the project
step 1: npm i  
step 2: npx pod-install ios 
step 3: npm server 
step 4: copy the ip and port and past it in env file against LOCAL_BASE_URL
step 5: run the application and android and ios in normally what we do. 
