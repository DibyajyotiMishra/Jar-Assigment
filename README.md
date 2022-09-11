### Infinite Movies

##### Created by React Native.

 **Features:**
  * Search
  * Pagination
  * Filters (Genre, Adult)
  * Categories
 

  **Important Libraries Used:**
  * React Native
  * Redux, Redux Thunk (State Management)
  * Axios (HTTP Client)
  * react Navigation for Navigation

  **Reusable Components:**
  * Text [Custom Text Component]:
    Params:
        - content: string (CONTENT TO BE RENDERED)
        - type: 'title' | 'subTitle' | 'body' | 'small'(SIZE OF TEXT TO BE RENDERED)
        - dimmed: boolean (VISIBILITY)
        - styles: object (CUSTOM STYLES)
        - props: any (OTHER PROPS)

  * Banner [Styled View Component]:
        Params:
          - children: React.ReactNode (Chilren to be rendered)
          - type: 'sm' | 'md' | 'lg' | 'xl' | 'dynamic' (Sizes)
          - styles?: object (Custom Styles)

