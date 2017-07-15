export default () => {
  return {
    manipulateOptions(opts) {
      opts.resolveModuleSource = source => source.replace('.styl', '.css')
    },
  }
}
