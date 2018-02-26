const statelessMobileRedux = name => [
  `import React from 'react'`,
  "import PropTypes from 'prop-types'",
  "import { View, Text } from 'react-native'"
  "import { connect } from 'react-redux'",
  "// import { get } from 'lodash'",
  "",
  "// import actions from 'actions'",
  `import styles from './${name}.styles'`,
  "",
  `const ${name} = () => (`,
  `  <View style={styles.${name}}>`,
  `    <Text>${name} stateless component</Text>`,
  "  </View>",
  ")",
  "",
  `${name}.propTypes = {}`,
  "",
  "const mapStateToProps = () => ({})",
  "",
  "const mapDispatchToProps = dispatch => ({})",
  "",
  `export default connect(mapStateToProps, mapDispatchToProps)(${name})`,
].join('\n')

const statelessMobile = name => [
  `import React from 'react'`,
  "import PropTypes from 'prop-types'",
  "import { View, Text } from 'react-native'"
  "",
  `import styles from './${name}.styles'`,
  "",
  `const ${name} = () => (`,
  `  <View style={styles.${name}}>`,
  `    <Text>${name} stateless component</Text>`,
  "  </View>",
  ")",
  "",
  `${name}.propTypes = {}`,
  "",
  `export default ${name}`,
].join('\n')

module.exports = {
  statelessMobileRedux,
  statelessMobile,
}
