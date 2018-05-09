import '../assets/css/footer.scss'

export default {
    data() {
        return {
            author: 'xuying'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Writen by { this.author }</span>
            </div>
        )
    }
}