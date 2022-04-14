export function get (req, res){
    return{
        status: 200,
        body: [
            {
                id:1,
                name: 'misha',
                bio: 'dev',
                url:'#'
            },
            {
                id:2,
                name: 'igor',
                bio: 'dev',
                url:'#'
            }
        ]
    }
}