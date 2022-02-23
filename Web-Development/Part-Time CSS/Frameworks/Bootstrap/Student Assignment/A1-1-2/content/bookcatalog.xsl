<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
                <head>
                    <title> XSL Transform </title>
                </head>
                <body > 
                        <h1>XML To HTML Table</h1>
                        <table border="1.0">
                            <tr>
                                <th>Book ID</th>
                                <th>Book Title</th>
                                <th>Price</th>
                                <th>Publised Date</th>
                            </tr>
                            <xsl:for-each select="catalog/book">
                                    <xsl:sort select="publish_date" data-type="text" order="ascending"/>
                                    <xsl:if test="price > 10">
                            <tr>
                                <td> 
                                    <xsl:value-of select="@id"/>
                                </td>
                                <td>
                                    <xsl:value-of select="title"/>
                                </td>
                                <td>
                                    <xsl:value-of select="price"/>
                                </td>
                                <td>
                                    <xsl:value-of select="publish_date"/>
                                </td>
                            </tr>
                            </xsl:if>
                            </xsl:for-each>
                        </table>                        
               
               <!--      <h2>
                            <xsl:value-of select="book/@id"/>
                        </h2>
                        <h2>
                            <xsl:value-of select="book/author"/>
                        </h2>
                -->
                </body>
        </html>
    </xsl:template>
</xsl:stylesheet>